#!/usr/bin/env node

/**
 * Script de test para el Worker de contacto
 * Simula una solicitud POST con datos de formulario
 */

const testData = {
  nombre: 'Test User',
  email: 'test@example.com',
  telefono: '+34 612 345 678',
  mensaje: 'Este es un mensaje de prueba para verificar que el Worker envía ambos emails correctamente.'
};

async function testWorker() {
  console.log('📧 Testando Worker de contacto...\n');
  console.log('Datos de prueba:');
  console.log(JSON.stringify(testData, null, 2));
  console.log('\n---\n');

  try {
    // Crear FormData
    const formData = new FormData();
    Object.entries(testData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Enviar al Worker local
    console.log('📤 Enviando solicitud a http://127.0.0.1:8787/contact...\n');
    const response = await fetch('http://127.0.0.1:8787/contact', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    console.log(`📊 Status: ${response.status}\n`);
    console.log('Respuesta del Worker:');
    console.log(JSON.stringify(data, null, 2));

    if (data.success) {
      console.log('\n✅ ¡Formulario enviado correctamente!');
      console.log(`Contact ID: ${data.contactId}`);
      console.log(`Mensaje: ${data.message}`);
      console.log('\n📧 Deberías recibir:');
      console.log('  1. Email de confirmación en: test@example.com');
      console.log('  2. Email de lead en: jgimenoperez@gmail.com');
      process.exit(0);
    } else {
      console.log('\n❌ Error al procesar formulario');
      console.log(`Error: ${data.error}`);
      if (data.details) {
        console.log('\nDetalles:');
        console.log(JSON.stringify(data.details, null, 2));
      }
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Error al enviar solicitud:');
    console.error(error.message);
    console.log('\n⚠️  Asegúrate de que el Worker está corriendo:');
    console.log('   npx wrangler dev --env development');
    process.exit(1);
  }
}

testWorker();
