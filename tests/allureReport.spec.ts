//npm i -D @playwright/test allure-playwright install allure locally
//npm i -g allure install allure globally
//then configure the reporter in playwright.config.ts

//npx allure generate ./allure-results -o allure-report : to generate the report
//npx allure open ./allure-report : to open the report
//rm -rf allure-results allure-report : to delete the previous report folders

/* MAC
# 1. Clean old reports
rm -rf allure-results allure-report

# 2. Run your test

# 3. Generate fresh report
npx allure generate ./allure-results -o allure-report

# 4. Open the fresh report
npx allure open ./allure-report
*/

/* WINDOWS
:: 1. Clean old reports
-Recurse -Force allure-results, allure-report

:: 2. Generate your test
npx allure generate .\allure-results -o .\allure-report --clean

Open report
npx allure open .\allure-report
*/

import { test, expect } from '@playwright/test';

test('allure report demo', async ({ page }) => {

    await page.goto('https://www.facebook.com/');
    console.log("Allure report demo executed");


});


//npx playwright test tests/allureReport.spec.ts    


//can allure/html can be converted to PDF or emailable.
// install pdf generator from terminal: npm i -g html-pdf-cli