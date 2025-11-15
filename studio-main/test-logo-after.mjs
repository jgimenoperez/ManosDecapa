import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:9002');
  await page.waitForTimeout(3000);

  // Captura del navbar completo
  await page.screenshot({
    path: 'screenshots/navbar-after.png',
    clip: { x: 0, y: 0, width: 1920, height: 100 }
  });

  // Captura del logo en el navbar con zoom
  const navbarLogo = await page.locator('header a[href="#home"]').first();
  await navbarLogo.screenshot({ path: 'screenshots/navbar-logo-after.png' });

  // Simular hover en el logo
  await navbarLogo.hover();
  await page.waitForTimeout(500);
  await navbarLogo.screenshot({ path: 'screenshots/navbar-logo-hover.png' });

  // Scroll al footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);

  // Captura del footer
  const footer = await page.locator('footer');
  await footer.screenshot({ path: 'screenshots/footer-after.png' });

  // Captura del logo del footer con zoom
  const footerLogo = await page.locator('footer a[href="#home"]');
  await footerLogo.screenshot({ path: 'screenshots/footer-logo-after.png' });

  // Simular hover en el logo del footer
  await footerLogo.hover();
  await page.waitForTimeout(500);
  await footerLogo.screenshot({ path: 'screenshots/footer-logo-hover.png' });

  // Vista móvil
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:9002');
  await page.waitForTimeout(2000);

  await page.screenshot({
    path: 'screenshots/navbar-mobile-after.png',
    clip: { x: 0, y: 0, width: 375, height: 80 }
  });

  await browser.close();
  console.log('Screenshots después de mejoras capturadas con éxito');
})();
