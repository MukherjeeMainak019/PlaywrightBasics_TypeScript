import { test } from '@playwright/test';

test('login and save session', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');

  await page.click('#login2');
  await page.fill('#loginusername', 'someusername');
  await page.fill('#loginpassword', 'somepassword');
  await page.getByRole('button', { name: 'Log in' }).click();

  // Save cookies + localStorage + sessionStorage
  // await page.context().storageState({ path: 'auth.json' }); //This auth.json file is your session.

  await page.context().storageState({ path: 'auth/admin.json' });


});


