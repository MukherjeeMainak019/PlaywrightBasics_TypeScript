/*
test1 : sanity
test 2: sanity, regression
test 3: regression
*/

//tag name is user defined

import { test, expect } from "@playwright/test";

test('@sanity tag approach 1', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    console.log("test1 - sanity executed");

});

//usual or best practice way of adding tag
test('tag approach 2', { tag: '@sanity' }, async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    console.log("test1 - sanity executed");

});

test('regression tag', { tag: '@regression' }, async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    console.log("test1 - regression executed");

});

test('both sanity and regression', { tag: ['@sanity', '@regression'] }, async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    console.log("test1 - both sanity and regression executed");

});

//npx playwright test tests/tagging.spec.ts --grep "@sanity"  -> to run sanity tests
//npx playwright test tests/tagging.spec.ts --grep "@regression"  -> to run regression tests
//npx playwright test tests/tagging.spec.ts --grep "(?=.*@sanity)(?=.*@regression)"  -> to run both sanity and regression tests
//npx playwright test tests/tagging.spec.ts --grep-invert "@regression"  -> to run all tests except regression tests
//npx playwright test tests/tagging.spec.ts --grep "@sanity|@regression"  -> to run sanity or regression tests


//another way of running tagged tests using configuration file
//we can set grep and grepInvert in the configuration file also





/* Running tagged test cases from package.json file directly using scripts :

"scripts": {
    "test:sanity": "npx playwright test --grep '@sanity'",},
    "test:regression": "npx playwright test --grep '@regression'",},

Then run the command : npm run test:sanity or npm run test:regression
*/