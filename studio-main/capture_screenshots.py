from playwright.sync_api import sync_playwright
import os

# Create screenshots directory if it doesn't exist
screenshots_dir = "C:\\MCP_CLAUDE\\JOSE\\ManosDecapa\\studio-main\\screenshots"
os.makedirs(screenshots_dir, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1920, 'height': 1080})

    # Navigate to the application
    page.goto('http://localhost:9003')
    page.wait_for_load_state('networkidle')

    # Capture full page screenshot
    print("Capturing full page screenshot...")
    page.screenshot(path=f'{screenshots_dir}/01_full_page.png', full_page=True)

    # Capture header
    print("Capturing header...")
    page.screenshot(path=f'{screenshots_dir}/02_header.png')

    # Capture hero section
    print("Capturing hero section...")
    hero = page.locator('#home')
    if hero.count() > 0:
        hero.screenshot(path=f'{screenshots_dir}/03_hero.png')

    # Scroll and capture services section
    print("Capturing services section...")
    services = page.locator('#services')
    if services.count() > 0:
        services.scroll_into_view_if_needed()
        page.wait_for_timeout(500)
        services.screenshot(path=f'{screenshots_dir}/04_services.png')

    # Capture for-whom section
    print("Capturing for-whom section...")
    for_whom = page.locator('#for-whom')
    if for_whom.count() > 0:
        for_whom.scroll_into_view_if_needed()
        page.wait_for_timeout(500)
        for_whom.screenshot(path=f'{screenshots_dir}/05_for_whom.png')

    # Capture process section
    print("Capturing process section...")
    process = page.locator('#process')
    if process.count() > 0:
        process.scroll_into_view_if_needed()
        page.wait_for_timeout(500)
        process.screenshot(path=f'{screenshots_dir}/06_process.png')

    # Capture why-us section
    print("Capturing why-us section...")
    why_us = page.locator('#why-us')
    if why_us.count() > 0:
        why_us.scroll_into_view_if_needed()
        page.wait_for_timeout(500)
        why_us.screenshot(path=f'{screenshots_dir}/07_why_us.png')

    # Capture gallery section
    print("Capturing gallery section...")
    gallery = page.locator('#gallery')
    if gallery.count() > 0:
        gallery.scroll_into_view_if_needed()
        page.wait_for_timeout(500)
        gallery.screenshot(path=f'{screenshots_dir}/08_gallery.png')

    # Capture pricing section
    print("Capturing pricing section...")
    pricing = page.locator('#pricing')
    if pricing.count() > 0:
        pricing.scroll_into_view_if_needed()
        page.wait_for_timeout(500)
        pricing.screenshot(path=f'{screenshots_dir}/09_pricing.png')

    # Capture about section
    print("Capturing about section...")
    about = page.locator('#about')
    if about.count() > 0:
        about.scroll_into_view_if_needed()
        page.wait_for_timeout(500)
        about.screenshot(path=f'{screenshots_dir}/10_about.png')

    # Capture contact section
    print("Capturing contact section...")
    contact = page.locator('#contact')
    if contact.count() > 0:
        contact.scroll_into_view_if_needed()
        page.wait_for_timeout(500)
        contact.screenshot(path=f'{screenshots_dir}/11_contact.png')

    # Capture footer
    print("Capturing footer...")
    page.evaluate('window.scrollTo(0, document.body.scrollHeight)')
    page.wait_for_timeout(500)
    page.screenshot(path=f'{screenshots_dir}/12_footer.png')

    # Test mobile view
    print("Capturing mobile view...")
    page.set_viewport_size({'width': 375, 'height': 812})
    page.goto('http://localhost:9003')
    page.wait_for_load_state('networkidle')
    page.screenshot(path=f'{screenshots_dir}/13_mobile_hero.png')

    # Open mobile menu
    print("Capturing mobile menu...")
    menu_button = page.locator('button[aria-label="Abrir menú"], button:has-text("Abrir menú")')
    if menu_button.count() > 0:
        menu_button.first.click()
        page.wait_for_timeout(500)
        page.screenshot(path=f'{screenshots_dir}/14_mobile_menu.png')

    browser.close()
    print(f"\nAll screenshots saved to: {screenshots_dir}")
