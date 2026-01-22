import { test, expect, Locator } from '@playwright/test';

test('visible screen screenshot', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com/');

  const timestamp = Date.now();
  // await page.screenshot({ path: `screenshots/homepage${timestamp}.png`});
  await expect(page).toHaveTitle('ABCD');

});

test('fullPage screen screenshot', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com/');

  const timestamp = Date.now();
  await page.screenshot({ path: `screenshots/fullpagehomepage${timestamp}.png`, fullPage: true });
  

}); 

test('specific element screen screenshot', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com/');

  const timestamp = Date.now();
  await page.locator('img[alt="Tricentis Demo Web Shop"]').screenshot({ path: `screenshots/logo${timestamp}.png` });
  //await page.locator('img[alt="Tricentis Demo Web Shop"]').screenshot({ path: `screenshots/logo${timestamp}.png`, fullPage: true });
  //using fullPage with element locator will throw error..

}); 

test('specific area screen screenshot', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com/');

  const timestamp = Date.now();
  await page.locator('.product-grid.home-page-product-grid').screenshot({ path: `screenshots/productgrid${timestamp}.png` });
  

}); 


test('from config file screen screenshot', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com/');
  
  //globally screenshot is already enabled from config file
  //best practice.

  //video is also enabled from config file
  //video is not recommended as it consumes more space
}); 