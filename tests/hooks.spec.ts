//hooks: = used as a pre-requisite to run before and after each test case.
import { test, expect } from '@playwright/test';

//hooks can be defined at 2 levels:
//1. at the file level (applies to all the tests in that file)
//2. at the global level (applies to all the tests in the project) - defined in playwright.config.ts file

//4 different hooks are available:
//1. beforeAll
//2. afterAll
//3. beforeEach
//4. afterEach

//file level hooks:

test.beforeAll(async () => {
    // runs once before all tests in the file
    console.log("This is before all hook :: will execute only 1 time");
})

test.afterAll(async () => {
    // runs once after all tests in the file
    console.log("This is after all hook :: will execute only 1 time");
})

test.beforeEach(async ({ page }) => {
    // runs before each test in the file
    console.log("This is before each hook");
    console.log("User logged in");
   
})

test.afterEach(async ({ page }) => {
    // runs after each test in the file
    console.log("This is after each hook");
     console.log("User is logged out");
    // await page.close(); // no need to close the page as Playwright does it automatically
})

    test('test1', async ({ page }) => {

        //login
        console.log("Executing test1");
        //logout

    });


    test('test2', async ({ page }) => {

        //login
        console.log("Executing test2");
        //logout

    });

      test('test3', async ({ page }) => {

        //login
        console.log("Executing test3");
        //logout

    });

    test('test4', async ({ page }) => {

        //login
        console.log("Executing test4");
        //logout

    });


        //npx playwright test tests/hooks.spec.ts
