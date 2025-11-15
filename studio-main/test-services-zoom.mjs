import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // Desktop view with zoom
  console.log('Capturing zoomed icon view...');
  const page = await context.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:9002', { waitUntil: 'networkidle' });

  await page.waitForTimeout(2000);

  // Scroll to services section
  await page.evaluate(() => {
    const allH2 = Array.from(document.querySelectorAll('h2'));
    const servicesH2 = allH2.find(h2 => h2.textContent.includes('Servicios'));
    if (servicesH2) {
      const section = servicesH2.closest('section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });

  await page.waitForTimeout(2000);

  // Screenshot first service card with surrounding context
  const cardElement = await page.$('.rounded-lg.border');
  if (cardElement) {
    await cardElement.screenshot({
      path: 'screenshots/services-card-zoom-after.png'
    });
    console.log('✓ Service card zoom screenshot captured');
  }

  // Get icon info
  const iconInfo = await page.evaluate(() => {
    const icon = document.querySelector('.rounded-full.flex.items-center.justify-center');
    if (icon) {
      const styles = window.getComputedStyle(icon);
      return {
        width: styles.width,
        height: styles.height,
        backgroundColor: styles.backgroundColor,
        display: icon.innerHTML
      };
    }
    return null;
  });

  console.log('\nIcon details:', iconInfo);

  await page.close();
  await browser.close();

  console.log('\nZoom screenshot captured successfully!');
})();
