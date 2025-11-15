# Implementación de Contact Form en Cloudflare Workers

**Fecha inicio**: 2025-11-15
**Estado**: En planificación

---

## 📋 Tabla de contenidos
1. [Arquitectura](#arquitectura)
2. [Componentes necesarios](#componentes-necesarios)
3. [Estructura del proyecto](#estructura-del-proyecto)
4. [Flujo de ejecución](#flujo-de-ejecución)
5. [Configuración necesaria](#configuración-necesaria)
6. [Archivos a crear](#archivos-a-crear)
7. [Hitos de implementación](#hitos-de-implementación)
8. [Despliegue](#despliegue)

---

## 🏗️ Arquitectura

```
┌─────────────────────────────────────────┐
│       Tu Next.js (Vercel)               │
│   - Landing page                        │
│   - Formulario frontend                 │
└─────────────┬───────────────────────────┘
              │
              │ POST /api/contact
              │ FormData (campos + imágenes)
              ↓
┌─────────────────────────────────────────┐
│   Cloudflare Worker                     │
│   - Valida datos                        │
│   - Procesa imágenes                    │
│   - Envía emails                        │
└─────────────┬───────────────────────────┘
              │
         ┌────┴────┐
         ↓         ↓
    ┌────────┐  ┌──────────┐
    │ R2     │  │ Resend   │
    │Storage │  │(Email)   │
    └────────┘  └──────────┘
```

---

## 🔧 Componentes necesarios

### **Cloudflare R2** (Almacenamiento de imágenes)
- **Costo**: Primer 10GB gratis, luego $0.015/GB
- **Ventaja**: Integración perfecta con Workers
- **Alternativa**: Supabase Storage (también gratis)
- **Status**: ⬜ Pendiente

### **Resend** (Envío de emails)
- **Costo**: 100 emails gratis/día, luego $20/mes
- **API KEY**: Gratuito registrarse
- **Ventaja**: Mejor deliverability que SendGrid
- **Status**: ⬜ Pendiente

### **Cloudflare Workers**
- **Costo**: 50,000 requests/día gratis
- **Lenguaje**: JavaScript/TypeScript
- **Herramienta CLI**: Wrangler
- **Status**: ⬜ Pendiente

---

## 📁 Estructura del proyecto DESPUÉS

```
tu-proyecto/
├── studio-main/                 (Tu Next.js actual)
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx
│   │   │   └── api/ (NO usamos esto)
│   │   └── components/
│   │       └── sections/
│   │           └── contact.tsx  (MODIFICADO)
│   └── package.json
│
└── contact-worker/              (NUEVA carpeta)
    ├── src/
    │   ├── index.ts             (Worker principal)
    │   ├── handlers/
    │   │   ├── contact.ts       (Procesa formulario)
    │   │   ├── upload.ts        (Sube a R2)
    │   │   └── email.ts         (Envía con Resend)
    │   ├── utils/
    │   │   ├── validation.ts    (Zod schema)
    │   │   └── cors.ts          (CORS headers)
    │   └── types/
    │       └── index.ts
    ├── wrangler.toml            (Configuración CF)
    ├── package.json
    └── tsconfig.json
```

---

## 🔄 Flujo de ejecución (paso a paso)

### **Fase 1: Usuario envía formulario**
```
1. Frontend (Next.js) recolecta:
   - nombre
   - email
   - teléfono
   - mensaje
   - 2-3 imágenes (archivos)

2. Valida localmente (Zod)

3. Crea FormData y envía:
   POST https://api.tudominio.com/contact
   Content-Type: multipart/form-data
```

### **Fase 2: Worker recibe y valida**
```
1. CORS check (permitir solo tu dominio)

2. Parse FormData:
   - Extrae archivos
   - Extrae campos de texto

3. Valida con Zod schema:
   - Email válido?
   - Imágenes válidas?
   - Tamaño < 5MB cada una?
   - Tipos permitidos (.jpg, .png, .webp)?

4. Si hay errores → Retorna error 400
```

### **Fase 3: Procesa imágenes**
```
1. Para CADA imagen:
   - Genera nombre único (UUID)
   - Sube a Cloudflare R2
   - Obtiene URL pública de R2

2. Almacena URLs en variable:
   - imageUrls = ["https://r2.tudominio.com/img1.jpg", ...]
```

### **Fase 4: Genera y envía email**
```
1. Construye HTML del email con:
   - Datos del contacto (nombre, email, teléfono)
   - Mensaje
   - Imágenes embebidas (via URLs de R2)

2. Envía a tu email via Resend API

3. Envía confirmación a usuario
```

### **Fase 5: Retorna respuesta**
```
200 OK → {
  success: true,
  message: "Formulario enviado correctamente",
  contactId: "uuid-123"
}

400/500 → {
  success: false,
  error: "Descripción del error"
}
```

---

## ⚙️ Configuración necesaria

### **En Cloudflare Dashboard:**

#### **A) Crear R2 Bucket**
```
1. Cloudflare → R2
2. Click "Create bucket"
3. Nombre: "manos-decapa-images"
4. Crear
5. Copiar:
   - Account ID
   - Bucket name
   - API token
```
**Status**: ⬜ Pendiente

#### **B) Obtener API Token**
```
1. Cloudflare → Account Settings → API Tokens
2. "Create Token"
3. Permiso: "R2 Edit"
4. Copiar token
```
**Status**: ⬜ Pendiente

### **En Resend (resend.com):**
```
1. Signup gratis
2. Obtener API Key
3. Copiar key
```
**Status**: ⬜ Pendiente

### **En tu máquina local (.env):**
```env
# Cloudflare
CLOUDFLARE_ACCOUNT_ID=xxxxx
CLOUDFLARE_R2_ACCESS_KEY=xxxxx
CLOUDFLARE_R2_SECRET_KEY=xxxxx
CLOUDFLARE_R2_BUCKET=manos-decapa-images

# Resend
RESEND_API_KEY=xxxxx

# General
ALLOWED_ORIGINS=https://tudominio.com,http://localhost:3000
ADMIN_EMAIL=tu-email@tudominio.com
```
**Status**: ⬜ Pendiente

---

## 📝 Archivos a crear

**En `contact-worker/`:**

1. **`wrangler.toml`** - Config de Cloudflare
   **Status**: ⬜ Pendiente

2. **`src/index.ts`** - Punto de entrada
   **Status**: ⬜ Pendiente

3. **`src/handlers/contact.ts`** - Lógica principal
   **Status**: ⬜ Pendiente

4. **`src/handlers/upload.ts`** - Upload a R2
   **Status**: ⬜ Pendiente

5. **`src/handlers/email.ts`** - Envío de email
   **Status**: ⬜ Pendiente

6. **`src/utils/validation.ts`** - Schema Zod
   **Status**: ⬜ Pendiente

7. **`src/utils/cors.ts`** - Headers CORS
   **Status**: ⬜ Pendiente

8. **`src/types/index.ts`** - Tipos TypeScript
   **Status**: ⬜ Pendiente

9. **`package.json`** - Dependencias
   **Status**: ⬜ Pendiente

10. **`tsconfig.json`** - Config TypeScript
    **Status**: ⬜ Pendiente

---

## 🎯 Hitos de implementación

### **Hito 1: Setup Cloudflare**
- [ ] Crear R2 Bucket
- [ ] Obtener API Token de Cloudflare
- [ ] Obtener API Key de Resend
- [ ] Documenter credenciales en `.env`

**Status**: ⬜ Pendiente

---

### **Hito 2: Crear estructura del Worker**
- [ ] Crear carpeta `contact-worker/`
- [ ] Crear `package.json`
- [ ] Crear `tsconfig.json`
- [ ] Crear `wrangler.toml`
- [ ] Instalar dependencias

**Status**: ⬜ Pendiente

---

### **Hito 3: Implementar validación**
- [ ] Crear `src/types/index.ts`
- [ ] Crear `src/utils/validation.ts` (Schema Zod)
- [ ] Crear `src/utils/cors.ts`

**Status**: ⬜ Pendiente

---

### **Hito 4: Implementar handlers**
- [ ] Crear `src/handlers/upload.ts` (R2 upload)
- [ ] Crear `src/handlers/email.ts` (Resend)
- [ ] Crear `src/handlers/contact.ts` (Lógica principal)

**Status**: ⬜ Pendiente

---

### **Hito 5: Crear Worker principal**
- [ ] Crear `src/index.ts`
- [ ] Integrar todos los handlers
- [ ] Configurar rutas

**Status**: ⬜ Pendiente

---

### **Hito 6: Modificar Frontend**
- [ ] Actualizar `src/components/sections/contact.tsx`
- [ ] Cambiar endpoint de `/api/contact` a `https://api.tudominio.com/contact`
- [ ] Agregar validaciones locales con Zod
- [ ] Agregar loading states
- [ ] Agregar manejo de errores

**Status**: ⬜ Pendiente

---

### **Hito 7: Testing local**
- [ ] Ejecutar `wrangler dev`
- [ ] Testear con curl/Postman
- [ ] Testear con formulario frontend en localhost
- [ ] Verificar logs

**Status**: ⬜ Pendiente

---

### **Hito 8: Deploy a Cloudflare**
- [ ] Ejecutar `wrangler deploy`
- [ ] Verificar URL pública del worker
- [ ] Configurar dominio personalizado (opcional)

**Status**: ⬜ Pendiente

---

### **Hito 9: Testing en producción**
- [ ] Enviar formulario desde sitio en vivo
- [ ] Verificar recepción de email
- [ ] Verificar imágenes en R2
- [ ] Verificar logs en Cloudflare Dashboard

**Status**: ⬜ Pendiente

---

### **Hito 10: Optimizaciones y mejoras**
- [ ] Agregar rate limiting
- [ ] Agregar retry logic
- [ ] Mejorar email HTML
- [ ] Agregar analytics

**Status**: ⬜ Pendiente

---

## 📊 Comparación de costos

| Opción | Almacenamiento | Emails | Hosting | Total |
|--------|---|---|---|---|
| **Cloudflare Workers** | R2 gratis (10GB) | Resend gratis (100/día) | Workers gratis | **$0** |
| **Next.js Vercel** | Vercel gratis | SendGrid $20/mes | Vercel gratis | **~$20/mes** |
| **AWS Lambda** | S3 $0.023/GB | SES $0.10/1000 | Lambda gratis (1M) | **~$5-10/mes** |

---

## 🚀 Despliegue

### **Paso 1: Deploy Worker en Cloudflare**
```bash
cd contact-worker
wrangler deploy
```

### **Paso 2: Obtener URL pública**
```
Cloudflare te da una URL como:
https://contact-worker.tuacuenta.workers.dev
```

### **Paso 3: Configurar dominio personalizado (opcional)**
```
1. Cloudflare → Workers → Routes
2. Agregar ruta: api.tudominio.com/contact
3. Apuntar al worker
```

---

## 📞 Flujo COMPLETO de ejemplo

```
Usuario en tudominio.com
  ↓
Llena formulario:
- Nombre: "Juan"
- Email: "juan@example.com"
- Teléfono: "+34 666 123 456"
- Mensaje: "Quiero cita"
- Imágenes: [img1.jpg, img2.jpg]
  ↓
Click "Enviar"
  ↓
Frontend valida localmente ✓
  ↓
POST a https://contact-worker.tuacuenta.workers.dev/contact
  ↓
Worker recibe FormData
  ↓
Valida con Zod ✓
  ↓
Sube imágenes a R2 ✓
  URLs generadas:
  - https://r2.tudominio.com/img-uuid1.jpg
  - https://r2.tudominio.com/img-uuid2.jpg
  ↓
Crea email HTML con datos + imágenes
  ↓
Envía a tu-email@tudominio.com via Resend ✓
  ↓
Envía confirmación a juan@example.com ✓
  ↓
Retorna JSON al frontend:
{
  success: true,
  message: "Gracias por contactarnos"
}
  ↓
Frontend muestra:
✅ "Tu mensaje fue enviado correctamente"
```

---

## ✅ Ventajas de esta arquitectura

✅ **Cero costos fijos** - Todo gratis (o casi)
✅ **Escalable** - Cloudflare distribuido globalmente
✅ **Seguro** - Credenciales en Cloudflare, no exponemos
✅ **Rápido** - Edge computing (más cercano al usuario)
✅ **Mantenimiento mínimo** - Serverless
✅ **Fácil de debuggear** - Logs en Cloudflare Dashboard

---

## 📝 Notas importantes

- Mantener `.env.local` fuera del repositorio (en `.gitignore`)
- Las credenciales en `wrangler.toml` se sincronizarán con Cloudflare
- Documentar todo lo que se hace en este archivo
- Marcar hitos conforme se completen

---

**Última actualización**: 2025-11-15
