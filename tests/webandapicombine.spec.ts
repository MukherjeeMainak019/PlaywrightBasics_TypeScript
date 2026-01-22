import { test, expect, request } from '@playwright/test';

let token: string;

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const response = await apiContext.post('https://learn-automation.onrender.com/api/signin', {
        data: {
            email: 'abcxyz@gmail.com',
            password: 'abc1234',
        },
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Response Body:', responseBody);
    token = responseBody.token;
    console.log('Authentication Token:', token);
});

test('skip login and validate cart', async ({ page }) => {
    
    // insert the token in the local storage of the web browser.

    page.addInitScript((tokenValue) => {

        window.localStorage.setItem('token', tokenValue);

    }, token);

    await page.goto('https://freelance-learn-automation.vercel.app/cart');

    await page.waitForTimeout(5000);

});