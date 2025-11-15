import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:9002');
  await page.waitForTimeout(2000);

  // Captura del navbar completo
  await page.screenshot({
    path: 'screenshots/navbar-before.png',
    clip: { x: 0, y: 0, width: 1920, height: 100 }
  });

  // Scroll al footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);

  // Captura del footer
  const footer = await page.locator('footer');
  await footer.screenshot({ path: 'screenshots/footer-before.png' });

  // Captura del logo en el navbar con zoom
  await page.goto('http://localhost:9002');
  await page.waitForTimeout(1000);
  const navbarLogo = await page.locator('header a[href="#home"]').first();
  await navbarLogo.screenshot({ path: 'screenshots/navbar-logo-before.png' });

  // Vista móvil
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:9002');
  await page.waitForTimeout(1000);

  await page.screenshot({
    path: 'screenshots/navbar-mobile-before.png',
    clip: { x: 0, y: 0, width: 375, height: 80 }
  });

  await browser.close();
  console.log('Screenshots capturadas con éxito');
})();
