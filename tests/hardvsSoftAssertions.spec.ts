import { test, expect, Locator } from '@playwright/test';

test('Hard assertion demo', async ({ page }) => {


    await page.goto('https://demowebshop.tricentis.com/');
    
    //hard assertion
    await expect(page).toHaveTitle('Demo Web Shop'); // if this assertion fails, the test will stop here
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/'); // set expect timeout to 20 seconds for this assertion
    await expect(page.locator('text=Welcome to our store')).toBeVisible();

    const logo = await page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect(logo).toBeVisible();
})

test('Soft assertion demo', async ({ page }) => {


    await page.goto('https://demowebshop.tricentis.com/');
    
    //soft assertion
    await expect.soft(page).toHaveTitle('Demo Web Shop2'); // if this assertion fails, the test will stop here
   
   //hard assertion
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/'); // set expect timeout to 20 seconds for this assertion
    await expect(page.locator('text=Welcome to our store')).toBeVisible();

    const logo = await page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect(logo).toBeVisible();
})