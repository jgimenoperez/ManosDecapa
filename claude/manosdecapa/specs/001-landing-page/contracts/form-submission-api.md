# API Contract: Contact Form Submission

**Phase 1 Output** | **Date**: 2025-11-14 | **Component**: Contact Form (FR-009, US2)

## Endpoint Specification

### POST /api/contact

Submits a customer inquiry from the contact form. Validates input, sends confirmation emails to customer and business, and stores submission for lead tracking.

## Request

### URL
```
POST https://api.manosdecapa.es/contact
or
POST https://[domain].vercel.app/api/contact (for Vercel deployment)
```

### Headers
```
Content-Type: application/json
X-Requested-With: XMLHttpRequest
```

### Body (JSON)

```json
{
  "fullName": "string (required, 2-100 chars)",
  "email": "string (required, valid email)",
  "phone": "string (required, flexible format: +34XXXXXXXXX or 6XX XXX XXX)",
  "clientType": "enum (required): Particular | Profesional",
  "itemType": "enum (required): Silla | Mesa | Cómoda | Puerta | Ventana | Metal | Otro",
  "itemDescription": "string (required, 10-1000 chars)",
  "message": "string (optional, max 2000 chars)",
  "photos": [
    {
      "filename": "string",
      "filesize": "integer (bytes)",
      "mimeType": "string: image/jpeg | image/png",
      "base64": "string (base64-encoded file content, optional)"
    }
  ],
  "captchaToken": "string (reCAPTCHA v3 token, optional but recommended)"
}
```

### Example Request

```bash
curl -X POST https://api.manosdecapa.es/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Juan García López",
    "email": "juan@example.com",
    "phone": "+34 666 777 888",
    "clientType": "Particular",
    "itemType": "Cómoda",
    "itemDescription": "Cómoda de nogal de años 70 con múltiples capas de pintura marrón",
    "message": "¿Cuál es el tiempo estimado para una cómoda como la mía?",
    "photos": []
  }'
```

## Response

### Success (200 OK)

```json
{
  "status": "success",
  "message": "Solicitud recibida. Nos pondremos en contacto en 24 horas.",
  "leadId": "uuid-string",
  "referenceNumber": "MDC-20251114-001",
  "confirmationEmail": "Enviado a juan@example.com",
  "nextSteps": "Revisa tu email para confirmación. Responderemos en 24 horas."
}
```

### Validation Error (400 Bad Request)

```json
{
  "status": "error",
  "code": "VALIDATION_ERROR",
  "message": "Errores de validación",
  "errors": [
    {
      "field": "email",
      "message": "Email inválido. Por favor verifica.",
      "value": "juan@invalid"
    },
    {
      "field": "phone",
      "message": "Teléfono inválido. Usa formato: +34 666 777 888",
      "value": "invalid-phone"
    }
  ]
}
```

### Server Error (500 Internal Server Error)

```json
{
  "status": "error",
  "code": "SERVER_ERROR",
  "message": "Error al procesar tu solicitud. Por favor intenta de nuevo más tarde.",
  "errorId": "err-20251114-abc123",
  "supportEmail": "support@manosdecapa.es"
}
```

### Timeout (408 Request Timeout)

```json
{
  "status": "error",
  "code": "TIMEOUT",
  "message": "La solicitud tardó demasiado. Por favor intenta de nuevo.",
  "suggestedAction": "Si el problema persiste, llama al +34..."
}
```

## Validation Rules (Server-Side)

| Field | Rule | Error Code |
|-------|------|-----------|
| fullName | Required, 2-100 chars, no special chars | `INVALID_NAME` |
| email | Required, valid RFC 5322 email | `INVALID_EMAIL` |
| phone | Required, flexible: +34XXXXXXXXX or 6XX XXX XXX | `INVALID_PHONE` |
| clientType | Required, enum value | `INVALID_CLIENT_TYPE` |
| itemType | Required, enum value | `INVALID_ITEM_TYPE` |
| itemDescription | Required, 10-1000 chars | `INVALID_ITEM_DESCRIPTION` |
| message | Optional, max 2000 chars | `MESSAGE_TOO_LONG` |
| photos | Optional, max 5 files, max 5MB each, JPEG/PNG only | `INVALID_PHOTOS` |
| captchaToken | If provided, must be valid reCAPTCHA v3 token (score > 0.5) | `CAPTCHA_FAILED` |

## Implementation Details

### Serverless Function (Vercel/AWS Lambda)

```javascript
// api/contact.js (Vercel) or contact.ts
import nodemailer from 'nodemailer';
import { validateContactForm } from '@/utils/validation';
import { sendConfirmationEmail, sendLeadNotification } from '@/services/email';

export default async function handler(req, res) {
  // 1. Validate HTTP method
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', code: 'METHOD_NOT_ALLOWED' });
  }

  try {
    // 2. Validate input against schema
    const { errors, data } = validateContactForm(req.body);
    if (errors.length > 0) {
      return res.status(400).json({
        status: 'error',
        code: 'VALIDATION_ERROR',
        errors
      });
    }

    // 3. Sanitize input (prevent XSS, SQL injection)
    const sanitized = sanitizeInput(data);

    // 4. Generate lead ID and reference number
    const leadId = generateUUID();
    const referenceNumber = `MDC-${new Date().toISOString().split('T')[0]}-${String(Math.random() * 10000).padStart(3, '0')}`;

    // 5. Save to storage (S3, KV, or similar)
    await saveLeadToStorage({
      id: leadId,
      referenceNumber,
      ...sanitized,
      submittedAt: new Date().toISOString(),
      ipAddress: req.headers['x-forwarded-for'],
      userAgent: req.headers['user-agent']
    });

    // 6. Send confirmation email to customer
    await sendConfirmationEmail({
      to: sanitized.email,
      name: sanitized.fullName,
      referenceNumber,
      itemType: sanitized.itemType
    });

    // 7. Send notification to business
    await sendLeadNotification({
      to: process.env.CONTACT_EMAIL,
      lead: sanitized,
      referenceNumber,
      leadLink: `https://admin.manosdecapa.es/leads/${leadId}`
    });

    // 8. Return success
    return res.status(200).json({
      status: 'success',
      message: 'Solicitud recibida. Nos pondremos en contacto en 24 horas.',
      leadId,
      referenceNumber,
      confirmationEmail: `Enviado a ${sanitized.email}`,
      nextSteps: 'Revisa tu email para confirmación. Responderemos en 24 horas.'
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({
      status: 'error',
      code: 'SERVER_ERROR',
      message: 'Error al procesar tu solicitud.',
      errorId: generateErrorId()
    });
  }
}
```

### Email Templates (SendGrid Dynamic Templates)

**Customer Confirmation Email**:
```
Subject: Solicitud de presupuesto recibida - Manos Decapa {{referenceNumber}}

Hola {{customerName}},

¡Gracias por tu interés en nuestro servicio de decapado!

Hemos recibido tu solicitud correctamente. Tu número de referencia es: {{referenceNumber}}

Detalles de tu solicitud:
- Tipo de mueble: {{itemType}}
- Descripción: {{itemDescription}}
- Cliente: {{clientType}}

Nos pondremos en contacto en 24 horas para confirmar los detalles y ofrecerte un presupuesto sin compromiso.

Si tienes alguna duda, puedes escribirnos a contact@manosdecapa.es o llamar al +34...

¡Gracias!
Equipo Manos Decapa
```

**Business Lead Notification**:
```
Subject: NUEVO PRESUPUESTO - {{customerName}} ({{referenceNumber}})

Nueva solicitud de presupuesto:

Cliente: {{customerName}}
Email: {{customerEmail}}
Teléfono: {{customerPhone}}
Tipo: {{clientType}}

Mueble:
- Tipo: {{itemType}}
- Descripción: {{itemDescription}}
- Fotos: {{photoCount}} adjuntas

Mensaje: {{message}}

Responder: {{adminLink}}
```

## Error Handling

### Network Failures

If email service fails after form validation succeeds, the form submission is still marked as successful (for customer UX) but the failure is logged:

```javascript
// Retry logic with exponential backoff
const sendEmailWithRetry = async (emailData, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await sendGridClient.send(emailData);
    } catch (error) {
      if (i === maxRetries - 1) {
        // Final failure - log to monitoring service (Sentry)
        logToMonitoring({
          level: 'error',
          message: 'Email send failed after retries',
          context: { attempt: i + 1, error }
        });
        throw error;
      }
      // Exponential backoff: 1s, 2s, 4s
      await sleep(Math.pow(2, i) * 1000);
    }
  }
};
```

## Rate Limiting

```javascript
// Prevent spam/abuse - max 5 submissions per IP per hour
const rateLimit = {
  windowMs: 60 * 60 * 1000, // 1 hour
  maxRequests: 5,
  keyGenerator: (req) => req.headers['x-forwarded-for'],
  handler: (req, res) => {
    res.status(429).json({
      status: 'error',
      code: 'RATE_LIMIT_EXCEEDED',
      message: 'Demasiadas solicitudes. Por favor intenta de nuevo más tarde.',
      retryAfter: 3600
    });
  }
};
```

## Security Considerations

1. **CSRF Protection**: Include CSRF token in form
2. **Input Sanitization**: Escape all user input to prevent XSS
3. **Email Verification**: Optional: verify email before marking lead as valid
4. **reCAPTCHA v3**: Optional: prevent bot submissions
5. **Rate Limiting**: Max 5 submissions per IP per hour
6. **Data Encryption**: Encrypt photos in transit (HTTPS) and at rest (S3 encryption)
7. **Logging**: Log all submissions for audit trail (30-day retention)

## Testing

### Unit Tests
```javascript
// test-api-contact.test.js
describe('POST /api/contact', () => {
  test('should return 200 with valid form data', async () => {
    const response = await submitForm(validFormData);
    expect(response.status).toBe(200);
    expect(response.body.leadId).toBeDefined();
  });

  test('should return 400 with invalid email', async () => {
    const response = await submitForm({ ...validFormData, email: 'invalid' });
    expect(response.status).toBe(400);
    expect(response.body.code).toBe('VALIDATION_ERROR');
  });

  test('should send confirmation emails', async () => {
    await submitForm(validFormData);
    expect(mockEmailService.send).toHaveBeenCalledWith(
      expect.objectContaining({ to: validFormData.email })
    );
  });
});
```

### E2E Tests (Cypress)
```javascript
// cypress/e2e/submit-form.cy.js
describe('Contact Form Submission (US2)', () => {
  it('should submit form and show success message', () => {
    cy.visit('/');
    cy.fillAndSubmitContactForm(testData);
    cy.contains('¡Gracias!').should('be.visible');
    cy.get('.success-message').should('contain', testData.referenceNumber);
  });

  it('should show validation errors for invalid email', () => {
    cy.visit('/');
    cy.fillContactForm({ ...testData, email: 'invalid' });
    cy.submitForm();
    cy.contains('Email inválido').should('be.visible');
  });
});
```

## Performance Requirements

- **Response time**: < 500ms (p95)
- **Availability**: 99.9% uptime
- **Concurrency**: Support 100+ simultaneous submissions
- **Throughput**: Handle 1000+ submissions/day without degradation

## Monitoring & Alerting

```javascript
// Metrics to track
{
  'form.submissions.total': counter,
  'form.submissions.success': counter,
  'form.submissions.validation_error': counter,
  'form.submissions.server_error': counter,
  'form.submission.duration_ms': histogram,
  'form.email_send.duration_ms': histogram,
  'form.email_send.failures': counter
}
```

Alert conditions:
- Error rate > 5% for 5 minutes
- Response time p95 > 1000ms
- Email send failure rate > 1%
- Availability < 99.9%

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-11-14 | Initial specification |
| (future) | TBD | Email verification, CRM integration |
