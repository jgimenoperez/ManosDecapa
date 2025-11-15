const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Navegar a la aplicación
    await page.goto('http://localhost:9002', { waitUntil: 'networkidle' });

    // Esperar a que el header esté visible
    await page.waitForSelector('header', { timeout: 10000 });

    // Screenshot del navbar completo en desktop
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.screenshot({
      path: 'navbar-desktop-full.png',
      fullPage: false
    });

    // Screenshot del navbar completo enfocado
    const header = await page.locator('header');
    await header.screenshot({
      path: 'navbar-desktop-header.png'
    });

    // Screenshot del logo específicamente
    const logo = await page.locator('a[href="#home"]').first();
    await logo.screenshot({
      path: 'navbar-logo-closeup.png'
    });

    // Screenshot en tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.screenshot({
      path: 'navbar-tablet.png',
      fullPage: false
    });

    // Screenshot en mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({
      path: 'navbar-mobile.png',
      fullPage: false
    });

    // Tomar medidas del logo
    const logoBoundingBox = await logo.boundingBox();
    console.log('Logo dimensions:', logoBoundingBox);

    // Obtener estilos computados del logo
    const logoStyles = await logo.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        fontSize: computed.fontSize,
        fontFamily: computed.fontFamily,
        fontWeight: computed.fontWeight,
        lineHeight: computed.lineHeight,
        letterSpacing: computed.letterSpacing,
        color: computed.color,
        padding: computed.padding,
        margin: computed.margin,
        display: computed.display,
        height: computed.height,
      };
    });
    console.log('Logo computed styles:', logoStyles);

    // Obtener estilos del header
    const headerStyles = await header.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        height: computed.height,
        padding: computed.padding,
        backgroundColor: computed.backgroundColor,
      };
    });
    console.log('Header computed styles:', headerStyles);

    console.log('Screenshots captured successfully!');

  } catch (error) {
    console.error('Error capturing screenshots:', error);
  } finally {
    await browser.close();
  }
})();
