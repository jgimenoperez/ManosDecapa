import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();

  // Desktop view
  const desktopPage = await context.newPage();
  await desktopPage.setViewportSize({ width: 1920, height: 1080 });

  console.log('Loading page...');
  await desktopPage.goto('http://localhost:9002', { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(2000);

  // Find services section
  console.log('Looking for Services section...');
  const servicesSection = desktopPage.locator('section').filter({ hasText: /servicios/i }).first();

  if (await servicesSection.count() > 0) {
    await servicesSection.scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(1000);

    // Screenshot 1: Full services section desktop
    console.log('Capturing desktop services section...');
    await servicesSection.screenshot({
      path: 'screenshots/services-desktop-full.png',
      animations: 'disabled'
    });

    // Screenshot 2: Individual service cards with zoom
    console.log('Capturing individual service cards...');
    const serviceCards = desktopPage.locator('[class*="service"], .rounded-lg, .border').filter({
      has: desktopPage.locator('svg, [class*="icon"]')
    });

    const cardCount = await serviceCards.count();
    console.log(`Found ${cardCount} service cards`);

    for (let i = 0; i < Math.min(cardCount, 6); i++) {
      const card = serviceCards.nth(i);
      await card.scrollIntoViewIfNeeded();
      await desktopPage.waitForTimeout(300);
      await card.screenshot({
        path: `screenshots/service-card-${i + 1}.png`,
        animations: 'disabled'
      });
    }

    // Screenshot 3: Hover effect on first card
    console.log('Testing hover effect...');
    if (cardCount > 0) {
      const firstCard = serviceCards.first();
      const icon = firstCard.locator('svg').first();

      await firstCard.scrollIntoViewIfNeeded();
      await desktopPage.waitForTimeout(300);

      // Before hover
      await firstCard.screenshot({
        path: 'screenshots/service-card-before-hover.png',
        animations: 'disabled'
      });

      // Hover
      await firstCard.hover();
      await desktopPage.waitForTimeout(1000); // Wait for animation
      await firstCard.screenshot({
        path: 'screenshots/service-card-hover.png'
      });
    }
  } else {
    console.log('Services section not found!');
  }

  // Mobile view
  console.log('Switching to mobile view...');
  const mobilePage = await context.newPage();
  await mobilePage.setViewportSize({ width: 375, height: 812 }); // iPhone X

  await mobilePage.goto('http://localhost:9002', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(2000);

  const servicesSectionMobile = mobilePage.locator('section').filter({ hasText: /servicios/i }).first();

  if (await servicesSectionMobile.count() > 0) {
    await servicesSectionMobile.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(1000);

    console.log('Capturing mobile services section...');
    await servicesSectionMobile.screenshot({
      path: 'screenshots/services-mobile-full.png',
      animations: 'disabled'
    });
  }

  console.log('Screenshots captured successfully!');
  console.log('Check the screenshots/ folder');

  await browser.close();
})().catch(console.error);
