import { test, expect, Page} from "@playwright/test";    

let page: Page; // global variable.

// we have just declared the variable here, we need to give a life to this page.
// how can we give life to this page? -> by associating it with the browser.
//from browser we can create context and from context we can create page.
//best practice is to keep hooks method outside the describe block or group block.


test.beforeAll('Open the application', async ({browser}) => {
    
    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com/');
    console.log("Application opened successfully");
})

test.afterAll('Close the application', async ({}) => {
    
    await page.close();
    console.log("Application closed successfully");
})

test.beforeEach('Login', async ({}) => {
    
await page.locator('#login2').click();
await page.locator('#loginusername').fill('someusername');
await page.locator('#loginpassword').fill('somepassword');
await page.locator('button[onclick="logIn()"]').click();
await page.waitForTimeout(10000); // just to wait for 10 seconds to complete the login process
console.log("Login successful");
    
})

test.afterEach('Logout', async ({}) => {
    
    await page.locator('#logout2').click();
    await page.waitForTimeout(3000); // just to wait for 2 seconds to complete the logout process
    console.log("Logout successful");

    
})



test.describe('My Group', async () => {

    test('Find number of products', async ({}) => { 

    const products = page.locator('#tbodyid .hrefch');
    const count = await products.count();
    console.log("Number of products: " + count);
    await expect(products).toHaveCount(9); // asserting that there are 9 products on the page

});


test('Add products of cart', async ({}) => { 

    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click(); 

   await page.on('dialog', async dialog => {
        expect (dialog.message()).toContain('Product added');
        await dialog.accept();
    });

    await page.locator('.btn.btn-success.btn-lg').click();

});

});