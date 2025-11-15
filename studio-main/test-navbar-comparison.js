const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto('http://localhost:9002', { waitUntil: 'networkidle' });
    await page.waitForSelector('header', { timeout: 10000 });
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Capturar estado ANTES
    console.log('Capturing BEFORE state...');
    await page.screenshot({
      path: 'comparison-before.png',
      clip: { x: 0, y: 0, width: 1920, height: 200 }
    });

    // Modificar el logo con los estilos recomendados
    await page.evaluate(() => {
      const logo = document.querySelector('a[href="#home"]');
      if (logo) {
        logo.style.fontSize = '36px';
        logo.style.fontWeight = '600';
        logo.style.lineHeight = '1';
        logo.style.letterSpacing = '0.5px';
        logo.style.display = 'flex';
        logo.style.alignItems = 'center';
        logo.style.height = '100%';
        logo.style.padding = '0 8px';
      }
    });

    // Esperar a que se apliquen los cambios
    await page.waitForTimeout(500);

    // Capturar estado DESPUÉS
    console.log('Capturing AFTER state...');
    await page.screenshot({
      path: 'comparison-after.png',
      clip: { x: 0, y: 0, width: 1920, height: 200 }
    });

    // Capturar close-up del logo DESPUÉS
    const logo = await page.locator('a[href="#home"]').first();
    await logo.screenshot({
      path: 'comparison-logo-after.png'
    });

    // Obtener nuevas medidas
    const newLogoBoundingBox = await logo.boundingBox();
    console.log('New logo dimensions:', newLogoBoundingBox);

    const newLogoStyles = await logo.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        fontSize: computed.fontSize,
        fontWeight: computed.fontWeight,
        lineHeight: computed.lineHeight,
        letterSpacing: computed.letterSpacing,
        height: computed.height,
      };
    });
    console.log('New logo styles:', newLogoStyles);

    console.log('Comparison screenshots captured successfully!');

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
})();
