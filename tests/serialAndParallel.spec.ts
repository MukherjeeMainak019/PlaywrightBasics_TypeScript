//workers: are assigned by playwright in parallel mode
//number of workers = number of cpu cores - 1; this is handle by playwright, end user has no control over it.
//to run tests in sequential mode we need to set workers: 1 in playwright.config.ts file
//npx playwright test tests/Parallel.spec.ts    

//serial mode of execution.

import { test } from '@playwright/test';

// test.describe.configure({ mode: 'parallel' }); // all the tests inside this describe block will run in serial mode.

test.describe('Group1', async () => {

    test('test1', async ({ page }) => {

        console.log("Executing test1");

    });


    test('test2', async ({ page }) => {

        console.log("Executing test2");

    });

        test('test3', async ({ page }) => {

        console.log("Executing test3");

    });

    test('test4', async ({ page }) => {

        console.log("Executing test4");

    });

});