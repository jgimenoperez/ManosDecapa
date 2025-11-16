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

const testImagePath = path.join(__dirname, 'test-image.png');
fs.writeFileSync(testImagePath, pngData);
console.log('✅ Test image created:', testImagePath);

// Test contact form submission with image
async function testImageUpload() {
  console.log('\n📧 Testing Contact Form with Image Upload...\n');

  try {
    const formData = new FormData();
    formData.append('nombre', 'Test User');
    formData.append('email', 'test@example.com');
    formData.append('telefono', '+34 612 345 678');
    formData.append('mensaje', 'Este es un mensaje de prueba con imagen.');

    // Add image file
    const imageBuffer = fs.readFileSync(testImagePath);
    const blob = new Blob([imageBuffer], { type: 'image/png' });
    formData.append('imagenes', blob, 'test-image.png');

    console.log('📝 Form data prepared:');
    console.log('  - nombre: Test User');
    console.log('  - email: test@example.com');
    console.log('  - telefono: +34 612 345 678');
    console.log('  - mensaje: Este es un mensaje de prueba con imagen.');
    console.log('  - imagenes: test-image.png (image/png, 68 bytes)');

    console.log('\n📤 Sending request to http://127.0.0.1:8787/contact...\n');

    const response = await fetch('http://127.0.0.1:8787/contact', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    console.log('✅ Response received:');
    console.log(JSON.stringify(data, null, 2));

    if (data.success) {
      console.log('\n✅ Test PASSED - Contact form submitted successfully');
      console.log('Contact ID:', data.contactId);
    } else {
      console.log('\n❌ Test FAILED - Error occurred');
      console.log('Error:', data.error);
      if (data.details) {
        console.log('Details:', data.details);
      }
    }
  } catch (error) {
    console.error('\n❌ Test FAILED - Exception occurred:');
    console.error(error.message);
  }

  // Clean up
  fs.unlinkSync(testImagePath);
  console.log('\n🧹 Test image cleaned up');
}

testImageUpload();
