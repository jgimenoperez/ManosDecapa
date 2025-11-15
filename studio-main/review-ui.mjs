import { chromium } from 'playwright';

async function reviewUI() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  // Desktop viewport
  const desktopPage = await context.newPage();
  await desktopPage.setViewportSize({ width: 1920, height: 1080 });
  await desktopPage.goto('http://localhost:9002');
  await desktopPage.waitForLoadState('networkidle');
  await desktopPage.waitForTimeout(1000);

  console.log('Capturando navbar desktop...');
  await desktopPage.screenshot({
    path: 'screenshots/navbar-desktop-final.png',
    clip: { x: 0, y: 0, width: 1920, height: 100 }
  });

  console.log('Capturando navbar con hover en logo...');
  await desktopPage.hover('header img[alt="Manos Decapa logo"]');
  await desktopPage.waitForTimeout(500);
  await desktopPage.screenshot({
    path: 'screenshots/navbar-logo-hover-final.png',
    clip: { x: 0, y: 0, width: 1920, height: 100 }
  });

  console.log('Scrolleando hasta el footer...');
  await desktopPage.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await desktopPage.waitForTimeout(1000);

  console.log('Capturando footer desktop...');
  const footerElement = await desktopPage.locator('footer').boundingBox();
  if (footerElement) {
    await desktopPage.screenshot({
      path: 'screenshots/footer-desktop-final.png',
      clip: footerElement
    });
  }

  console.log('Capturando footer con hover en logo...');
  await desktopPage.hover('footer img[alt="Manos Decapa logo"]');
  await desktopPage.waitForTimeout(500);
  if (footerElement) {
    await desktopPage.screenshot({
      path: 'screenshots/footer-logo-hover-final.png',
      clip: footerElement
    });
  }

  await desktopPage.close();

  // Mobile viewport
  const mobilePage = await context.newPage();
  await mobilePage.setViewportSize({ width: 375, height: 667 });
  await mobilePage.goto('http://localhost:9002');
  await mobilePage.waitForLoadState('networkidle');
  await mobilePage.waitForTimeout(1000);

  console.log('Capturando navbar mobile...');
  await mobilePage.screenshot({
    path: 'screenshots/navbar-mobile-final.png',
    clip: { x: 0, y: 0, width: 375, height: 80 }
  });

  console.log('Capturando menú mobile abierto...');
  const menuButton = await mobilePage.locator('button:has(svg.lucide-menu)');
  await menuButton.click();
  await mobilePage.waitForTimeout(800);
  await mobilePage.screenshot({
    path: 'screenshots/navbar-mobile-menu-final.png',
    fullPage: false,
    clip: { x: 0, y: 0, width: 375, height: 667 }
  });

  console.log('Scrolleando hasta el footer en mobile...');
  await mobilePage.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await mobilePage.waitForTimeout(1000);

  console.log('Capturando footer mobile...');
  const mobileFooterElement = await mobilePage.locator('footer').boundingBox();
  if (mobileFooterElement) {
    await mobilePage.screenshot({
      path: 'screenshots/footer-mobile-final.png',
      clip: mobileFooterElement
    });
  }

  await mobilePage.close();
  await context.close();
  await browser.close();

  console.log('\n✓ Screenshots capturados exitosamente en la carpeta screenshots/');
}

reviewUI().catch(console.error);
