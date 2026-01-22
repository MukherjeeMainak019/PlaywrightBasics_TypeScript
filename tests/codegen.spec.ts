//npx playwright codegen

//npx playwright codegen -o tests/autocodegentest.spec.ts     
//npx playwright codegen --output tests/autocodegentest.spec.ts  
//o stands for output file where the generated code to be saved.

//npx playwright test codegen.spec.ts --debug  --> to run a particular test file

//best suited to pick locators and generate code snippets quickly.

//conversion of generated code from TS to other languages like python, java , csharp etc is possible from the playwright inspector window.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
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