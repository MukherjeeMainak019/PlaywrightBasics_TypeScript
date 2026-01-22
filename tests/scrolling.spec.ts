import { test, expect, Locator } from '@playwright/test';

test('scroll', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const textboxName : Locator = await page.getByRole('heading', {  name : 'Footer Links' });

    textboxName.scrollIntoViewIfNeeded();

    await page.waitForTimeout(5000);

  
});

test('specific area of a page ', async ({ page }) => { 

  await page.goto('https://playwright.dev/docs/intro');

    const targetElement : Locator = await page.locator('//a[text()="Videos"]');
    const scrollWindow : Locator = await page.locator('//a[text()="Videos"]');
    await scrollWindow.hover();
    targetElement.scrollIntoViewIfNeeded();

    await page.waitForTimeout(5000);
  
});

test('MouseWheel scroll', async ({ page }) => { 

  await page.goto('https://playwright.dev/docs/intro');

    
    page.mouse.wheel(0, 2000); // x axis , y axis //scroll down
    await page.waitForTimeout(5000);

    page.mouse.wheel(0, -500); // scroll up
    await page.waitForTimeout(5000);

    page.mouse.wheel(0, -500); // scroll up
    await page.waitForTimeout(5000);

    page.mouse.wheel(1000, 0); // scroll left to right
    await page.waitForTimeout(5000);
  
});



test('Using evaluate', async ({ page }) => { 

    await page.goto('https://playwright.dev/docs/intro');
    
    await page.evaluate(() => window.scrollBy(0, 5000))

    await page.waitForTimeout(5000);


    await page.evaluate(() => window.scrollBy(0, -4000))

    await page.waitForTimeout(5000);


    await page.evaluate(() => window.scrollBy(5000, 0)) // left to right of the page

    await page.goto('https://days.christou1910.com/en/');

    page.mouse.wheel(2000, 0); // left to right of the page
    await page.waitForTimeout(5000);

    page.mouse.wheel(2000, 0); // left to right of the page
    await page.waitForTimeout(5000);

    page.mouse.wheel(0, 3000); // left to right of the page
    await page.waitForTimeout(5000);
  
});