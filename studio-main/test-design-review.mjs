import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function captureScreenshots() {
  const browser = await chromium.launch({ headless: true });

  try {
    // Desktop screenshots
    const desktopContext = await browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });
    const desktopPage = await desktopContext.newPage();

    console.log('Navegando a http://localhost:9002...');
    await desktopPage.goto('http://localhost:9002', { waitUntil: 'networkidle' });
    await desktopPage.waitForTimeout(2000);

    // Captura del navbar desktop
    console.log('Capturando navbar desktop...');
    const navbar = await desktopPage.locator('header, nav').first();
    await navbar.screenshot({
      path: join(__dirname, 'screenshots', 'design-review-navbar-desktop.png')
    });

    // Captura del logo en navbar desktop - con hover
    console.log('Capturando logo desktop...');
    const logoDesktop = await desktopPage.locator('header a[href="#home"]').first();
    await logoDesktop.screenshot({
      path: join(__dirname, 'screenshots', 'design-review-logo-desktop.png')
    });

    // Hover sobre el logo
    console.log('Capturando logo desktop con hover...');
    await logoDesktop.hover();
    await desktopPage.waitForTimeout(500);
    await logoDesktop.screenshot({
      path: join(__dirname, 'screenshots', 'design-review-logo-desktop-hover.png')
    });

    // Scroll hasta el footer
    console.log('Navegando al footer...');
    await desktopPage.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await desktopPage.waitForTimeout(1000);

    // Captura del footer
    console.log('Capturando footer desktop...');
    const footer = await desktopPage.locator('footer').first();
    await footer.screenshot({
      path: join(__dirname, 'screenshots', 'design-review-footer-desktop.png')
    });

    await desktopContext.close();

    // Mobile screenshots
    const mobileContext = await browser.newContext({
      viewport: { width: 375, height: 667 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15'
    });
    const mobilePage = await mobileContext.newPage();

    console.log('Navegando a versión mobile...');
    await mobilePage.goto('http://localhost:9002', { waitUntil: 'networkidle' });
    await mobilePage.waitForTimeout(2000);

    // Captura del navbar mobile
    console.log('Capturando navbar mobile...');
    const navbarMobile = await mobilePage.locator('header, nav').first();
    await navbarMobile.screenshot({
      path: join(__dirname, 'screenshots', 'design-review-navbar-mobile.png')
    });

    // Captura del logo mobile
    console.log('Capturando logo mobile...');
    const logoMobile = await mobilePage.locator('header a[href="#home"]').first();
    await logoMobile.screenshot({
      path: join(__dirname, 'screenshots', 'design-review-logo-mobile.png')
    });

    // Scroll hasta el footer mobile
    console.log('Navegando al footer mobile...');
    await mobilePage.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await mobilePage.waitForTimeout(1000);

    // Captura del footer mobile
    console.log('Capturando footer mobile...');
    const footerMobile = await mobilePage.locator('footer').first();
    await footerMobile.screenshot({
      path: join(__dirname, 'screenshots', 'design-review-footer-mobile.png')
    });

    await mobileContext.close();

    console.log('Todas las capturas completadas exitosamente!');

  } catch (error) {
    console.error('Error durante la captura:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

captureScreenshots().catch(console.error);
