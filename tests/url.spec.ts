import {test, expect} from '@playwright/test';

test('getUrl of the page', async ({page}) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    let text = await page.url();
    console.log(text);
    await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/'); // "/" means ignore the before and after part of the automation practice.
});

// use await when the function is returning a promise.

