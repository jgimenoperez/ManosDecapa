import { WorkerEnv } from '../types/index';

/**
 * Genera un ID único para los archivos
 */
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Genera el nombre del archivo en R2
 */
function generateFileName(originalName: string): string {
  const timestamp = Date.now();
  const uuid = generateUUID();
  const extension = originalName.split('.').pop() || 'jpg';
  return `contacts/${timestamp}-${uuid}.${extension}`;
}

/**
 * Sube una imagen a R2 y retorna la URL pública
 */
export async function uploadImageToR2(
  file: File,
  bucket: R2Bucket,
  publicUrl: string
): Promise<string> {
  try {
    // Validar que sea un archivo
    if (!file || file.size === 0) {
      throw new Error('Archivo vacío');
    }

    // Validar tipo de archivo
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      throw new Error(`Tipo de archivo no permitido: ${file.type}`);
    }

    // Validar tamaño (5MB máximo)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      throw new Error(`Archivo demasiado grande: ${file.size} bytes`);
    }

    // Generar nombre único
    const fileName = generateFileName(file.name);

    // Convertir File a ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();

    // Subir a R2
    await bucket.put(fileName, arrayBuffer, {
      httpMetadata: {
        contentType: file.type,
        cacheControl: 'public, max-age=31536000', // 1 año
      },
      customMetadata: {
        uploadedAt: new Date().toISOString(),
        originalName: file.name,
      },
    });

    // Construir URL pública del archivo en R2
    // Usa la URL pública configurada en el entorno
    const fileUrl = `${publicUrl}/${fileName}`;

    console.log(`✅ Imagen subida: ${fileUrl}`);
    return fileUrl;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error(`❌ Error subiendo imagen: ${errorMessage}`);
    throw new Error(`Error al subir imagen: ${errorMessage}`);
  }
}

/**
 * Sube múltiples imágenes a R2
 */
export async function uploadImagesToR2(
  files: File[],
  bucket: R2Bucket,
  publicUrl: string
): Promise<string[]> {
  try {
    if (!files || files.length === 0) {
      return [];
    }

    // Validar cantidad máxima de archivos
    if (files.length > 3) {
      throw new Error('Máximo 3 imágenes permitidas');
    }

    // Subir cada imagen en paralelo
    const uploadPromises = files.map((file) =>
      uploadImageToR2(file, bucket, publicUrl)
    );

    const urls = await Promise.all(uploadPromises);

    console.log(`✅ ${urls.length} imágenes subidas correctamente`);
    return urls;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error(`❌ Error en carga múltiple: ${errorMessage}`);
    throw new Error(`Error al subir imágenes: ${errorMessage}`);
  }
}

/**
 * Elimina una imagen de R2 (para casos de error)
 */
export async function deleteImageFromR2(
  fileName: string,
  bucket: R2Bucket
): Promise<void> {
  try {
    await bucket.delete(fileName);
    console.log(`🗑️ Imagen eliminada: ${fileName}`);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error(`❌ Error eliminando imagen: ${errorMessage}`);
  }
}
