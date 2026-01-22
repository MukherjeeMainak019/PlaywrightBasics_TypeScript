import { test } from '@playwright/test';

test.use({ storageState: 'auth.json' });

test('dashboard test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
});



test.use({ storageState: 'auth/admin.json' });

test('dashboard test admin', { tag: '@session' }, async ({ page }) => {
await page.goto('https://www.demoblaze.com/');
});
