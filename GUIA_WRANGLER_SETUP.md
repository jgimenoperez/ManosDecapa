# Guía Completa: Configuración de Cloudflare Worker para Formulario de Contacto

**Documento**: Guía de configuración del Cloudflare Worker
**Fecha**: 2025-11-16
**Proyecto**: Manos De Capa
**Versión**: 1.0

---

## 📋 Tabla de Contenidos

1. [Requisitos Previos](#requisitos-previos)
2. [Paso 1: Crear R2 Bucket](#paso-1-crear-r2-bucket)
3. [Paso 2: Obtener API Token de Cloudflare](#paso-2-obtener-api-token-de-cloudflare)
4. [Paso 3: Crear Cuenta en Resend](#paso-3-crear-cuenta-en-resend)
5. [Paso 4: Verificar Dominio en Resend](#paso-4-verificar-dominio-en-resend)
6. [Paso 5: Instalar Wrangler](#paso-5-instalar-wrangler)
7. [Paso 6: Configurar Wrangler](#paso-6-configurar-wrangler)
8. [Paso 7: Crear Estructura del Worker](#paso-7-crear-estructura-del-worker)
9. [Paso 8: Implementar Código](#paso-8-implementar-código)
10. [Paso 9: Testear Localmente](#paso-9-testear-localmente)
11. [Paso 10: Desplegar a Producción](#paso-10-desplegar-a-producción)

---

## Requisitos Previos

- ✅ Cuenta en Cloudflare (con dominio)
- ✅ Node.js instalado (v18+)
- ✅ npm instalado
- ✅ Git (recomendado)
- ✅ Conocimiento básico de TypeScript (opcional)

---

## Paso 1: Crear R2 Bucket

**R2 es el almacenamiento de objetos de Cloudflare** (similar a AWS S3). Aquí guardaremos las imágenes del formulario.

### Procedimiento:

1. **Accede a Cloudflare Dashboard**
   - Abre https://dash.cloudflare.com
   - Login con tu cuenta

2. **Navega a R2**
   - Sidebar izquierdo → R2
   - Click en "Create Bucket"

3. **Crea un bucket**
   - Nombre: `manos-decapa-images`
   - Región: Automática (por defecto)
   - Privado (unchecked "Allow public read access")
   - Click "Create Bucket"

4. **Copia el Account ID**
   - Verás tu Account ID en la esquina superior derecha
   - Ejemplo: `df4054b48d287ad7d72f1713fde9fd03`
   - Guárdalo en un lugar seguro

### Variables a guardar:
```
BUCKET_NAME = manos-decapa-images
ACCOUNT_ID = tu_account_id_aqui (ej: a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6)
```

---

## Paso 2: Obtener API Token de Cloudflare

**El API Token permite que Wrangler autentique con Cloudflare**.

### Procedimiento:

1. **Accede a API Tokens**
   - Cloudflare Dashboard → Account Settings (esquina superior derecha)
   - Pestaña "API Tokens"
   - Click "Create Token"

2. **Crea un token con permisos R2**
   - Nombre del token: `Wrangler R2 Token`
   - Permisos: Selecciona "R2" → "Edit"
   - Recursos: Selecciona tu account
   - Click "Continue to Summary"

3. **Copia el token**
   - Te mostrará una cadena larga (máximo 1 sola vez)
   - Ejemplo: `abc123xyz789def456ghi789jkl012mno345pqr678`
   - **Guárdalo en un lugar SEGURO** (no lo pierdas)

### Variable a guardar:
```
CLOUDFLARE_API_TOKEN = tu_token_api_aqui
```

---

## Paso 3: Crear Cuenta en Resend

**Resend es el servicio para enviar emails**.

### Procedimiento:

1. **Accede a Resend**
   - Abre https://resend.com
   - Click "Sign Up"
   - Completa el formulario con tu email

2. **Verifica tu email**
   - Resend te enviará un email de confirmación
   - Click en el enlace

3. **Obtén tu API Key**
   - Dashboard de Resend → API Keys
   - Click "Create API Key"
   - Cópiala
   - Ejemplo: `re_abc123xyz789def456ghi789jkl012`

### Variable a guardar:
```
RESEND_API_KEY = tu_resend_api_key_aqui
```

---

## Paso 4: Verificar Dominio en Resend

**Para que los emails salgan de tu dominio** (no de noreply@resend.dev).

### Procedimiento:

1. **Accede a Resend Dashboard**
   - Settings → Domains
   - Click "Add Domain"

2. **Agregar tu dominio**
   - Dominio: `manosdecapa.es`
   - Click "Add"

3. **Verificar DNS**
   - Resend te dará registros DNS para agregar
   - Ve a tu proveedor DNS (Cloudflare, GoDaddy, etc.)
   - Agrega los registros DNS que Resend te proporciona
   - Espera 24-48 horas para la propagación
   - Una vez verificado, podrás enviar emails desde `noreply@manosdecapa.es`

---

## Paso 5: Instalar Wrangler

**Wrangler es la herramienta CLI de Cloudflare** para desarrollar y desplegar Workers.

### Procedimiento:

En tu terminal (PowerShell, CMD, o Terminal de VS Code):

```bash
# Crear carpeta del proyecto (si aún no existe)
mkdir contact-worker
cd contact-worker

# Instalar Wrangler
npm install --save-dev wrangler@4
```

### Verificar instalación:
```bash
npx wrangler --version
# Debería mostrar: wrangler 4.47.0 (o similar)
```

---

## Paso 6: Configurar Wrangler

**Autenticar Wrangler con tu cuenta de Cloudflare**.

### Procedimiento:

```bash
# Login en Cloudflare
npx wrangler login
```

Esto:
1. Abrirá un navegador
2. Pedirá permiso para autorizar Wrangler
3. Click "Authorize" en el navegador
4. Verás confirmación en la terminal

### Verificar login:
```bash
npx wrangler whoami
```

Debería mostrar tu cuenta y Account ID.

### ⚠️ Solucionar problemas de login:

Si ves error: `You are logged in with an API Token...`

**Solución:**

```powershell
# En PowerShell (Windows):
Remove-Item -Path "$env:APPDATA\.wrangler" -Recurse -Force -ErrorAction SilentlyContinue

# Luego intenta login de nuevo
npx wrangler login
```

---

## Paso 7: Crear Estructura del Worker

**Organizar carpetas y archivos del proyecto**.

### Estructura final:
```
contact-worker/
├── src/
│   ├── handlers/
│   │   ├── contact.ts       (Orquesta todo)
│   │   ├── email.ts         (Envía emails)
│   │   └── upload.ts        (Sube a R2)
│   ├── utils/
│   │   ├── cors.ts          (Headers CORS)
│   │   └── validation.ts    (Schema Zod)
│   ├── types/
│   │   └── index.ts         (Tipos TypeScript)
│   └── index.ts             (Punto de entrada)
├── .env                      (Variables locales - NO subir a Git)
├── .gitignore               (Archivos a ignorar)
├── package.json
├── tsconfig.json
└── wrangler.toml            (Configuración de Cloudflare)
```

### Crear carpetas:
```bash
mkdir -p src/handlers src/utils src/types
```

---

## Paso 8: Implementar Código

Este paso incluye crear todos los archivos TypeScript. Los archivos ya están creados en el proyecto, pero aquí están los componentes principales:

### A) `wrangler.toml` (Configuración del Worker)

```toml
name = "manos-decapa-contact-worker"
main = "src/index.ts"
compatibility_date = "2024-01-01"
compatibility_flags = ["nodejs_compat"]

# Production environment
[env.production]
vars = {
  DOMAIN = "tu_dominio.es",
  ADMIN_EMAIL = "admin@tu_dominio.es",
  FROM_EMAIL = "noreply@tu_dominio.es",
  FROM_NAME = "Tu Nombre Empresa"
}

[[env.production.r2_buckets]]
binding = "R2_BUCKET"
bucket_name = "tu-bucket-name"

# Development environment (para testing local)
[env.development]
vars = {
  DOMAIN = "localhost",
  ADMIN_EMAIL = "admin@tu_dominio.es",
  FROM_EMAIL = "noreply@tu_dominio.es",
  FROM_NAME = "Tu Nombre Empresa",
  RESEND_API_KEY = "tu_resend_api_key_aqui"
}

[[env.development.r2_buckets]]
binding = "R2_BUCKET"
bucket_name = "tu-bucket-name"
```

**Puntos clave:**
- `main`: Apunta a `src/index.ts`
- `[env.production]` y `[env.development]`: Dos ambientes diferentes
- `r2_buckets`: Define el binding con R2
- Variables de entorno: Configuradas por ambiente

### B) `package.json` (Dependencias)

```json
{
  "name": "manos-decapa-contact-worker",
  "version": "1.0.0",
  "main": "src/index.ts",
  "type": "module",
  "scripts": {
    "dev": "wrangler dev --env development",
    "deploy": "wrangler deploy --env production",
    "build": "wrangler build"
  },
  "dependencies": {
    "zod": "^3.22.4",
    "resend": "^3.0.0"
  },
  "devDependencies": {
    "@cloudflare/workers-types": "^4.20231218.0",
    "wrangler": "^4.47.0",
    "typescript": "^5.3.3"
  }
}
```

### C) `.env` (Variables locales - NO subir a Git)

```env
CLOUDFLARE_ACCOUNT_ID=tu_account_id_aqui
CLOUDFLARE_API_TOKEN=tu_token_api_aqui
CLOUDFLARE_R2_BUCKET=manos-decapa-images
RESEND_API_KEY=tu_resend_api_key_aqui
DOMAIN=tu_dominio.es
ADMIN_EMAIL=admin@tu_dominio.es
FROM_EMAIL=noreply@tu_dominio.es
FROM_NAME=Tu Nombre Empresa
ALLOWED_ORIGINS=https://tu_dominio.es,http://localhost:3000
```

**IMPORTANTE:** Este archivo contiene credenciales. Debe estar en `.gitignore`.

### D) `.gitignore` (Archivos a ignorar)

```
node_modules/
.env
.env.local
dist/
build/
.wrangler/
coverage/
```

---

## Paso 9: Testear Localmente

### Instalar dependencias:
```bash
cd contact-worker
npm install
```

### Ejecutar Worker en local:
```bash
npm run dev
```

O directamente:
```bash
npx wrangler dev --env development
```

Debería ver:
```
✓ Ready on http://127.0.0.1:8787
```

### Testear con HTML:

Crea un archivo `test-contact.html` en la carpeta del Worker y abre en navegador.

El archivo `test-contact.html` ya está creado en el proyecto.

**Probar:**
1. Llena el formulario
2. Envía
3. Debería ver respuesta `✅ Éxito!`

---

## Paso 10: Desplegar a Producción

### Requerimientos previos:
- ✅ Worker probado localmente
- ✅ Dominio verificado en Resend
- ✅ Token configurado correctamente

### Deploy:

```bash
npm run deploy
```

O directamente:
```bash
npx wrangler deploy --env production
```

Debería ver:
```
✓ Uploaded manos-decapa-contact-worker (v1.0.0)
✓ Published to https://manos-decapa-contact-worker.manosdecapa.workers.dev
```

### Configurar dominio personalizado (opcional):

Para usar `api.manosdecapa.es` en lugar de `workers.dev`:

1. Cloudflare Dashboard → Workers
2. Click en tu worker `manos-decapa-contact-worker`
3. Settings → Domains & Routes
4. Click "Add Route"
5. Patrón: `api.manosdecapa.es/contact`
6. Zone: `manosdecapa.es`
7. Click "Add"

Ahora podrás acceder en: `https://api.manosdecapa.es/contact`

---

## 📝 Resumen de Comandos Útiles

```bash
# Desarrollo
npm run dev              # Ejecutar en local (puerto 8787)

# Deploying
npm run deploy           # Desplegar a producción
npm run build            # Compilar TypeScript

# Debugging
npx wrangler tail        # Ver logs en tiempo real
npx wrangler whoami      # Ver cuenta actual
npx wrangler logout      # Cerrar sesión
```

---

## ⚠️ Troubleshooting Común

### Error: "You are logged in with an API Token"

**Solución:**
```powershell
Remove-Item -Path "$env:APPDATA\.wrangler" -Recurse -Force
npx wrangler login
```

### Error: "R2 bucket not found"

**Soluciones:**
1. Verifica que el nombre del bucket es correcto en `wrangler.toml`
2. Verifica que el Account ID es correcto
3. Verifica que el token tiene permisos R2

### Error: "RESEND_API_KEY is undefined"

**Soluciones:**
1. Verifica que está en `wrangler.toml` bajo `[env.development]`
2. Si desplegando: Ejecuta `wrangler secret put RESEND_API_KEY`

### El formulario no envía emails

**Revisar:**
1. ¿Resend API Key es correcta?
2. ¿Dominio verificado en Resend?
3. ¿Email de destino es correcto?
4. Revisa logs: `npx wrangler tail`

---

## 🔒 Seguridad

### Buenas prácticas:

1. **Nunca subas `.env` a Git**
   - Agrega a `.gitignore`

2. **Rotación de tokens**
   - Cambia el token API cada 3-6 meses
   - Invalida tokens antiguos

3. **CORS restringido**
   - Solo permite tu dominio
   - No uses `*` en producción

4. **Rate limiting**
   - Implementa límites de requests
   - Evita abuso de formularios

---

## 📊 Arquitectura Final

```
Frontend (Next.js)
    ↓ POST /contact (FormData)
    ↓
Cloudflare Worker
    ├─ Valida (Zod)
    ├─ Sube imágenes (R2)
    ├─ Envía emails (Resend)
    └─ Retorna respuesta JSON
    ↓
Frontend recibe respuesta
```

---

## 📞 Soporte

- **Documentación Wrangler**: https://developers.cloudflare.com/workers/
- **Documentación Resend**: https://resend.com/docs
- **Documentación R2**: https://developers.cloudflare.com/r2/

---

**Última actualización**: 2025-11-16
**Autor**: Claude Code
**Estado**: ✅ Completado y Testeado
