import { test, expect } from '@playwright/test';

test.use({
  launchOptions: {
    args: ['--disable-features=PasswordLeakDetection']
  }
});

test('login without chrome password warning', async ({ page }) => {

  await page.goto('https://freelance-learn-automation.vercel.app/login');

  await page.fill('#email1', 'abcxyz@gmail.com');
  await page.fill('#password1', 'abc1234');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.waitForTimeout(3000);
});
