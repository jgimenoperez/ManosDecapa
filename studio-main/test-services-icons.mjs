import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });

  console.log('Loading page...');
  await page.goto('http://localhost:9002', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const servicesSection = page.locator('section').filter({ hasText: /Nuestros Servicios/i }).first();

  if (await servicesSection.count() > 0) {
    await servicesSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);

    // Get all three main service cards
    const cards = page.locator('img[alt*="Decapado"], img[alt*="Puerta"], img[alt*="Elementos"]');
    const count = await cards.count();

    console.log(`Found ${count} service icons`);

    // Screenshot each icon individually
    for (let i = 0; i < count; i++) {
      const img = cards.nth(i);
      const alt = await img.getAttribute('alt');

      console.log(`Capturing icon: ${alt}`);

      // Get the parent card
      const card = img.locator('..').locator('..').locator('..').locator('..');

      await card.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);

      // Before hover - full card
      await card.screenshot({
        path: `screenshots/service-icon-${i + 1}-card.png`,
        animations: 'disabled'
      });

      // Icon only
      const iconContainer = img.locator('..');
      await iconContainer.screenshot({
        path: `screenshots/service-icon-${i + 1}-only.png`,
        animations: 'disabled'
      });

      // Hover state
      await card.hover();
      await page.waitForTimeout(800);
      await iconContainer.screenshot({
        path: `screenshots/service-icon-${i + 1}-hover.png`
      });

      // Move mouse away
      await page.mouse.move(0, 0);
      await page.waitForTimeout(300);
    }

    console.log('Icon screenshots captured!');
  }

  await browser.close();
})().catch(console.error);
