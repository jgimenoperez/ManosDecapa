// Types for the contact form

export interface ContactFormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  imagenes?: File[];
}

export interface ProcessedContact {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  imageUrls: string[];
  createdAt: string;
}

export interface SuccessResponse {
  success: true;
  message: string;
  contactId: string;
}

export interface ErrorResponse {
  success: false;
  error: string;
  details?: Record<string, string[]>;
}

export type ContactResponse = SuccessResponse | ErrorResponse;

export interface EmailContent {
  to: string;
  subject: string;
  html: string;
}

export interface WorkerEnv {
  R2_BUCKET: R2Bucket;
  RESEND_API_KEY: string;
  DOMAIN: string;
  ADMIN_EMAIL: string;
  FROM_EMAIL: string;
  FROM_NAME: string;
  ALLOWED_ORIGINS: string;
  CLOUDFLARE_ACCOUNT_ID: string;
  R2_PUBLIC_URL: string;
  RESEND_AUDIENCE_ID: string;
}
