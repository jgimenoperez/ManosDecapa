import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();

  // Test Desktop Navbar
  console.log('Testing Desktop Navbar...');
  const desktopPage = await browser.newPage();
  await desktopPage.setViewportSize({ width: 1920, height: 1080 });

  try {
    await desktopPage.goto('http://localhost:9002', { waitUntil: 'networkidle', timeout: 30000 });
    await desktopPage.waitForTimeout(2000);

    // Screenshot of navbar area
    const navbar = await desktopPage.locator('header, nav').first();
    await navbar.screenshot({ path: 'screenshots/navbar-desktop-review.png' });
    console.log('✓ Navbar desktop screenshot saved');

    // Full page screenshot for context
    await desktopPage.screenshot({
      path: 'screenshots/navbar-desktop-full.png',
      fullPage: false
    });
    console.log('✓ Full page desktop screenshot saved');

  } catch (error) {
    console.error('Error with desktop navbar:', error.message);
  }
  await desktopPage.close();

  // Test Mobile Navbar
  console.log('\nTesting Mobile Navbar...');
  const mobilePage = await browser.newPage();
  await mobilePage.setViewportSize({ width: 375, height: 812 }); // iPhone X size

  try {
    await mobilePage.goto('http://localhost:9002', { waitUntil: 'networkidle', timeout: 30000 });
    await mobilePage.waitForTimeout(2000);

    // Screenshot of mobile navbar
    const mobileNavbar = await mobilePage.locator('header, nav').first();
    await mobileNavbar.screenshot({ path: 'screenshots/navbar-mobile-review.png' });
    console.log('✓ Navbar mobile screenshot saved');

    // Try to open mobile menu if it exists
    const menuButton = await mobilePage.locator('button[aria-label*="menu"], button[aria-label*="Menu"], button:has-text("Menu")').first();
    const menuButtonCount = await mobilePage.locator('button[aria-label*="menu"], button[aria-label*="Menu"], button:has-text("Menu")').count();

    if (menuButtonCount > 0) {
      await menuButton.click();
      await mobilePage.waitForTimeout(1000);
      await mobilePage.screenshot({
        path: 'screenshots/navbar-mobile-menu-open.png',
        fullPage: false
      });
      console.log('✓ Mobile menu open screenshot saved');
    }

  } catch (error) {
    console.error('Error with mobile navbar:', error.message);
  }
  await mobilePage.close();

  // Test Footer
  console.log('\nTesting Footer...');
  const footerPage = await browser.newPage();
  await footerPage.setViewportSize({ width: 1920, height: 1080 });

  try {
    await footerPage.goto('http://localhost:9002', { waitUntil: 'networkidle', timeout: 30000 });

    // Scroll to footer
    await footerPage.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await footerPage.waitForTimeout(2000);

    // Screenshot of footer
    const footer = await footerPage.locator('footer').first();
    await footer.screenshot({ path: 'screenshots/footer-review.png' });
    console.log('✓ Footer screenshot saved');

  } catch (error) {
    console.error('Error with footer:', error.message);
  }
  await footerPage.close();

  // Test Footer on Mobile
  console.log('\nTesting Footer Mobile...');
  const footerMobilePage = await browser.newPage();
  await footerMobilePage.setViewportSize({ width: 375, height: 812 });

  try {
    await footerMobilePage.goto('http://localhost:9002', { waitUntil: 'networkidle', timeout: 30000 });

    // Scroll to footer
    await footerMobilePage.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await footerMobilePage.waitForTimeout(2000);

    // Screenshot of mobile footer
    const mobileFooter = await footerMobilePage.locator('footer').first();
    await mobileFooter.screenshot({ path: 'screenshots/footer-mobile-review.png' });
    console.log('✓ Footer mobile screenshot saved');

  } catch (error) {
    console.error('Error with mobile footer:', error.message);
  }
  await footerMobilePage.close();

  await browser.close();
  console.log('\n✓ All screenshots completed!');
})();
