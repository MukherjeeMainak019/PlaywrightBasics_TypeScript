//annotations in playwright
//different types of annotations are available in playwright like skip, only, slow, fixme etc.  
//skip -> to skip a particular test case
//only -> to run only a particular test case
//slow -> to mark a test case as slow
//fixme -> to mark a test case as fixme
//we can apply these annotations at test level as well as at describe level, but not recommended at describe level.

//npx playwright test tests/annotations.spec.ts

import { test, expect } from "@playwright/test";

test.only('test1 - only annotation', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    console.log("test1 executed");

});

test.skip('test2 - skip annotation', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    console.log("test2 skipped");

});


test('test3 - skip annotation with condition', async ({ page , browserName}) => {
    test.skip(browserName === 'chromium', 'Skipping on Chromium browser');
    await page.goto('https://www.demoblaze.com/');
    console.log("test3 will skip during chromium browser");

});
//expected to fail
test.fail('test4 - fail annotation', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    console.log("test4 is expected to fail");
    
});
//fixme meaning: this test is marked as fixme because it has some issues and it needs to be fixed.
//partially completed test cases are marked as fixme and it will skip
test.fixme('test6 - fixme annotation', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    console.log("test6 is marked as fixme");
    
});

//slow
test('test5 - slow annotation', async ({ page }) => {
    test.slow(); // triple the default timeout for this test total 90 seconds
    await page.goto('https://www.demoblaze.com/');
    console.log("test5 is marked as slow");
    
});

