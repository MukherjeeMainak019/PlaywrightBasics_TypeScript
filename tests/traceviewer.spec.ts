import { test, expect } from '@playwright/test';

test('global trace viewer', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('someusername');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('someuserpassword');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Log in' }).click();
});


// for particular test trace viewer
test.use({ trace: 'on' });

test('trace viewer for particular test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('someusername');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('someuserpassword');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Log in' }).click();
});

