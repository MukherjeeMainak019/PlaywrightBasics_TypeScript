import{test,expect} from '@playwright/test';

test.beforeEach('launching app', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');

});

test.afterEach('closing app', async({page})=>{

    await page.close();

});

test.describe('Basic tests on Demo Web Shop', async()=>{
test('logotest', async({page})=>{

    await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();

});

test('title test', async({page})=>{

    await expect(page).toHaveTitle('Demo Web Shop');

});

test('search test', async({page})=>{

    await page.locator('#small-searchterms').fill('computer');
    await page.locator('input[value="Search"]').click();
    await expect.soft(page.locator('h2 a').nth(0)).toContainText('Computer');

});
});