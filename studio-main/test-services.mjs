import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // Desktop view
  console.log('Capturing desktop view...');
  const desktopPage = await context.newPage();
  await desktopPage.setViewportSize({ width: 1920, height: 1080 });
  await desktopPage.goto('http://localhost:9002', { waitUntil: 'networkidle' });

  await desktopPage.waitForTimeout(2000);

  // Scroll to services section
  await desktopPage.evaluate(() => {
    const allH2 = Array.from(document.querySelectorAll('h2'));
    const servicesH2 = allH2.find(h2 => h2.textContent.includes('Servicios'));
    if (servicesH2) {
      const section = servicesH2.closest('section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });

  await desktopPage.waitForTimeout(2000);

  // Capture full services section - desktop
  await desktopPage.screenshot({
    path: 'screenshots/services-section-desktop-after.png',
    fullPage: false
  });

  console.log('✓ Desktop screenshot captured');

  await desktopPage.close();

  // Mobile view
  console.log('Capturing mobile view...');
  const mobilePage = await context.newPage();
  await mobilePage.setViewportSize({ width: 375, height: 812 });
  await mobilePage.goto('http://localhost:9002', { waitUntil: 'networkidle' });

  await mobilePage.waitForTimeout(2000);

  // Scroll to services section
  await mobilePage.evaluate(() => {
    const allH2 = Array.from(document.querySelectorAll('h2'));
    const servicesH2 = allH2.find(h2 => h2.textContent.includes('Servicios'));
    if (servicesH2) {
      const section = servicesH2.closest('section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });

  await mobilePage.waitForTimeout(2000);

  // Capture full services section - mobile
  await mobilePage.screenshot({
    path: 'screenshots/services-section-mobile-after.png',
    fullPage: false
  });

  console.log('✓ Mobile screenshot captured');

  await mobilePage.close();

  // Desktop zoom on icon
  console.log('Capturing icon detail...');
  const zoomPage = await context.newPage();
  await zoomPage.setViewportSize({ width: 1920, height: 1080 });
  await zoomPage.goto('http://localhost:9002', { waitUntil: 'networkidle' });

  await zoomPage.waitForTimeout(2000);

  // Scroll to services section
  await zoomPage.evaluate(() => {
    const allH2 = Array.from(document.querySelectorAll('h2'));
    const servicesH2 = allH2.find(h2 => h2.textContent.includes('Servicios'));
    if (servicesH2) {
      const section = servicesH2.closest('section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });

  await zoomPage.waitForTimeout(2000);

  // Find and screenshot first service card with icon
  const iconElement = await zoomPage.$('.rounded-full.flex.items-center.justify-center');
  if (iconElement) {
    await iconElement.screenshot({
      path: 'screenshots/services-icon-detail-after.png'
    });
    console.log('✓ Icon detail screenshot captured');
  } else {
    console.log('⚠ Icon element not found');
  }

  await zoomPage.close();
  await browser.close();

  console.log('\nAll screenshots captured successfully!');
})();
