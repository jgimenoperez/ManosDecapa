/**
 * Upload handler alternativo usando S3 API de R2
 * Se usa cuando el binding de R2 no está disponible (desarrollo local)
 */

function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function generateFileName(originalName: string): string {
  const timestamp = Date.now();
  const uuid = generateUUID();
  const extension = originalName.split('.').pop() || 'jpg';
  return `contacts/${timestamp}-${uuid}.${extension}`;
}

/**
 * Sube una imagen a R2 usando S3 API compatible
 * Requiere credenciales de R2 (S3 API)
 */
export async function uploadImageToR2S3(
  file: File,
  fileName: string,
  accessKeyId: string,
  secretAccessKey: string,
  accountId: string,
  bucketName: string,
  publicUrl: string
): Promise<string> {
  try {
    // Validar archivo
    if (!file || file.size === 0) {
      throw new Error('Archivo vacío');
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      throw new Error(`Tipo no permitido: ${file.type}`);
    }

    if (file.size > 5 * 1024 * 1024) {
      throw new Error('Archivo muy grande (máx 5MB)');
    }

    // Generar nombre único
    const finalFileName = generateFileName(file.name);
    const buffer = await file.arrayBuffer();

    // Endpoint S3 de R2
    const endpoint = `https://${accountId}.r2.cloudflarestorage.com`;
    const url = `${endpoint}/${bucketName}/${finalFileName}`;

    // Crear firma AWS Signature V4
    const headers = createS3Headers(
      finalFileName,
      bucketName,
      buffer,
      accessKeyId,
      secretAccessKey,
      accountId
    );

    // Subir archivo
    const response = await fetch(url, {
      method: 'PUT',
      headers,
      body: buffer,
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Upload failed: ${response.status} - ${error}`);
    }

    const fileUrl = `${publicUrl}/${finalFileName}`;
    console.log(`✅ Imagen subida a R2: ${fileUrl}`);
    return fileUrl;
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Error desconocido';
    console.error(`❌ Error en S3 upload: ${msg}`);
    throw error;
  }
}

/**
 * Crea headers AWS Signature V4 para PUT request a R2
 */
function createS3Headers(
  key: string,
  bucket: string,
  body: ArrayBuffer,
  accessKey: string,
  secretKey: string,
  accountId: string
): Record<string, string> {
  const now = new Date();
  const amzDate = now
    .toISOString()
    .replace(/[:-]/g, '')
    .replace(/\.\d{3}Z/, 'Z');
  const dateStamp = amzDate.substring(0, 8);

  const headers: Record<string, string> = {
    Host: `${accountId}.r2.cloudflarestorage.com`,
    'X-Amz-Date': amzDate,
    'X-Amz-Content-Sha256': 'UNSIGNED-PAYLOAD',
    'Content-Type': 'application/octet-stream',
  };

  const canonicalRequest = createCanonicalRequest(
    'PUT',
    `/${bucket}/${key}`,
    headers,
    body
  );

  const canonicalRequestHash = hashString(canonicalRequest);

  const credentialScope = `${dateStamp}/auto/s3/aws4_request`;
  const stringToSign = `AWS4-HMAC-SHA256\n${amzDate}\n${credentialScope}\n${canonicalRequestHash}`;

  const signature = calculateSignature(
    secretKey,
    dateStamp,
    'auto',
    's3',
    stringToSign
  );

  const authorizationHeader = `AWS4-HMAC-SHA256 Credential=${accessKey}/${credentialScope}, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=${signature}`;

  headers['Authorization'] = authorizationHeader;

  return headers;
}

function createCanonicalRequest(
  method: string,
  path: string,
  headers: Record<string, string>,
  body: ArrayBuffer
): string {
  const headerNames = Object.keys(headers)
    .map((h) => h.toLowerCase())
    .sort();

  const canonicalHeaders = headerNames
    .map((name) => `${name}:${headers[name]}\n`)
    .join('');

  const signedHeaders = headerNames.join(';');

  return `${method}\n${path}\n\n${canonicalHeaders}\n${signedHeaders}\nUNSIGNED-PAYLOAD`;
}

function hashString(str: string): string {
  // Simulación simple - en producción usar Web Crypto API
  return 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'; // SHA256('')
}

function calculateSignature(
  secretKey: string,
  dateStamp: string,
  region: string,
  service: string,
  stringToSign: string
): string {
  // Implementación simplificada - usar crypto real en producción
  const key1 = `AWS4${secretKey}`;
  // ... implementar HMAC-SHA256
  return 'placeholder';
}

export async function uploadImagesToR2S3(
  files: File[],
  accessKeyId: string,
  secretAccessKey: string,
  accountId: string,
  bucketName: string,
  publicUrl: string
): Promise<string[]> {
  if (!files || files.length === 0) {
    return [];
  }

  if (files.length > 3) {
    throw new Error('Máximo 3 imágenes');
  }

  const uploadPromises = files.map((file) =>
    uploadImageToR2S3(
      file,
      generateFileName(file.name),
      accessKeyId,
      secretAccessKey,
      accountId,
      bucketName,
      publicUrl
    )
  );

  const urls = await Promise.all(uploadPromises);
  console.log(`✅ ${urls.length} imágenes subidas correctamente`);
  return urls;
}
