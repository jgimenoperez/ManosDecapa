import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:9002', { waitUntil: 'networkidle' });

  await page.waitForTimeout(2000);

  // Scroll to services section
  await page.evaluate(() => {
    const allH2 = Array.from(document.querySelectorAll('h2'));
    const servicesH2 = allH2.find(h2 => h2.textContent.includes('Nuestros Servicios'));
    if (servicesH2) {
      servicesH2.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  await page.waitForTimeout(2000);

  // Find the services section and get first card
  const cards = await page.$$('section:has(h2:text("Nuestros Servicios")) .shadow-md');

  if (cards.length > 0) {
    console.log(`Found ${cards.length} service cards`);

    // Screenshot first card
    await cards[0].screenshot({
      path: 'screenshots/services-first-card-detail.png'
    });
    console.log('✓ First service card captured');

    // Screenshot the icon area specifically
    const iconContainer = await page.$('section:has(h2:text("Nuestros Servicios")) .bg-primary\\/20');
    if (iconContainer) {
      await iconContainer.screenshot({
        path: 'screenshots/services-icon-container-detail.png'
      });
      console.log('✓ Icon container captured');
    }

    // Get computed styles
    const iconStyles = await page.evaluate(() => {
      const iconContainer = document.querySelector('section:has(h2:text("Nuestros Servicios")) .bg-primary\\/20');
      if (iconContainer) {
        const styles = window.getComputedStyle(iconContainer);
        const img = iconContainer.querySelector('img');
        const imgStyles = img ? window.getComputedStyle(img) : null;

        return {
          container: {
            backgroundColor: styles.backgroundColor,
            padding: styles.padding,
            width: styles.width,
            height: styles.height,
            borderRadius: styles.borderRadius
          },
          icon: imgStyles ? {
            width: imgStyles.width,
            height: imgStyles.height
          } : null
        };
      }
      return null;
    });

    console.log('\nIcon styles:', JSON.stringify(iconStyles, null, 2));
  } else {
    console.log('No service cards found');
  }

  await browser.close();
  console.log('\nScreenshots captured successfully!');
})();
