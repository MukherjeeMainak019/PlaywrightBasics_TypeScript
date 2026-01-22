//auto waiting  is by default enabled in playwright for all the actions like click, type , goto etc.
//no need to add explicit wait or sleep in the code
//Playwright will wait for the element to be ready before performing any action on it.
//actions that are cehcked by PLW internally are:
//Visibility, Stability, Received events, Enabled/Disabled state, Editable, Navigation and network activity
//For assertions also PLW will wait until the assertion passes before failing the test.
//30 secs is the default.

//timeout can set as test timeout(for each test) and except timeout(for each assertions)
//timeout can be set in the config file or in the test itself
//test timeout defines how long a single test is alloweed to run before being marked as failed
//expect timeout defines how long PLW will wait for an assertion to pass before failing the test
//local test timeout will override the global timeout set in the config file

import { test, expect, Locator } from '@playwright/test';

test('waiting', async ({ page }) => {

    test.setTimeout(60000); // set test timeout to 60 seconds for this test
    test.slow(); // 3x30 seconds default -> 90 seconds, triples the timeout for this test


    await page.goto('https://demowebshop.tricentis.com/');
    
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/', { timeout: 20000}); // set expect timeout to 20 seconds for this assertion
    await expect(page.locator('text=Welcome to our store')).toBeVisible({ timeout: 10000});
})

//auto retrying assertions will follow the same auto waiting timeout rules as other actions in PLW
//these assertions will automatically wait for the expected condition to be met before proceeding

//non retrying assertions will follow the same auto waiting timeout rules as other actions in PLW
//these assertions will check the condition once and if it fails the test will fail immediately

//More examples of kind of explicit waits:
// await page.waitForSelector('#loginButton');

// await page.waitForSelector('#loginButton', { state: 'visible' });

// await page.locator('#loginButton').waitFor({
//   state: 'visible',
//   timeout: 10000  // 10 seconds
// });

// No — Playwright’s auto-waiting is not disabled or overridden 
// when you use waitForSelector() / waitFor() / waitForElementState().
//Practically: Yes, you bypass it, because you are explicitly waiting for something
