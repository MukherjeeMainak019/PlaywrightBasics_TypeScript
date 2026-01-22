import { test, expect } from '@playwright/test';

const authFile = 'auth/admin.json';

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://example.com/login');
  await page.fill('#username', 'admin');
  await page.fill('#password', 'password');
  await page.click('#login');

  await context.storageState({ path: authFile });
  await context.close();
});

test.use({ storageState: authFile });

test('admin dashboard test', async ({ page }) => {
  await page.goto('https://example.com/admin/dashboard');

  await expect(page).toHaveURL(/admin/);
});

