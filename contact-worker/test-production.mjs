import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create a simple test image (1x1 pixel PNG)
const pngData = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00, 0x0d,
  0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
  0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53, 0xde, 0x00, 0x00, 0x00,
  0x0c, 0x49, 0x44, 0x41, 0x54, 0x08, 0x99, 0x63, 0xf8, 0xcf, 0xc0, 0x00,
  0x00, 0x00, 0x03, 0x00, 0x01, 0x9e, 0xf6, 0x4f, 0xdd, 0x00, 0x00, 0x00,
  0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82
]);

const testImagePath = path.join(__dirname, 'test-prod-image.png');
fs.writeFileSync(testImagePath, pngData);
console.log('✅ Test image created:', testImagePath);

// Test contact form submission with image on PRODUCTION
async function testProductionForm() {
  console.log('\n📧 Testing Production Contact Form...\n');
  console.log('🌐 Endpoint: https://manos-decapa-contact-worker-production.manosdevtroll.workers.dev/contact');

  try {
    const formData = new FormData();
    formData.append('nombre', 'Test Production User');
    formData.append('email', 'productiontester@example.com');
    formData.append('telefono', '+34 666 777 888');
    formData.append('mensaje', 'Este es un test de producción del formulario de contacto con imagen.');

    // Add image file
    const imageBuffer = fs.readFileSync(testImagePath);
    const blob = new Blob([imageBuffer], { type: 'image/png' });
    formData.append('imagenes', blob, 'test-production.png');

    console.log('📝 Form data prepared:');
    console.log('  - nombre: Test Production User');
    console.log('  - email: productiontester@example.com');
    console.log('  - telefono: +34 666 777 888');
    console.log('  - mensaje: Test de producción');
    console.log('  - imagenes: test-production.png (image/png)');

    console.log('\n📤 Sending request to production endpoint...\n');

    const response = await fetch(
      'https://manos-decapa-contact-worker-production.manosdevtroll.workers.dev/contact',
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await response.json();

    console.log('✅ Response received:');
    console.log(JSON.stringify(data, null, 2));

    if (data.success) {
      console.log('\n✅ Production Test PASSED');
      console.log('Contact ID:', data.contactId);
      console.log('\n🎉 El Worker está funcionando en producción!');
      console.log('📸 Las imágenes deberían estar en R2: https://manos-decapa-images.df4054b48d287ad7d72f1713fde9fd03.r2.cloudflarestorage.com/contacts/');
    } else {
      console.log('\n❌ Production Test FAILED');
      console.log('Error:', data.error);
      if (data.details) {
        console.log('Details:', data.details);
      }
    }
  } catch (error) {
    console.error('\n❌ Production Test FAILED - Exception occurred:');
    console.error(error.message);
  }

  // Clean up
  fs.unlinkSync(testImagePath);
  console.log('\n🧹 Test image cleaned up');
}

testProductionForm();
