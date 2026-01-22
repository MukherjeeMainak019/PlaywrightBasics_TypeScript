import { test, expect } from '@playwright/test';

//describe block is used to group related tests together..

test.describe('Login', async () => {

    test('Valid Login', async ({ page }) => {
        console.log('Executing Valid Login Test');
    });


    test('Invalid Login', async ({ page }) => {
        console.log('Executing Invalid Login Test');

    });

});

test.describe('Password', async () => {

    test.skip('Forgot Password', async ({ page }) => {
        console.log('Executing Forgot Password Test');

    });

    test('Reset Password', async ({ page }) => {
        console.log('Executing Reset Password Test');
    });

});

// this is best suited when the tests are independent and can be grouped logically.
// this is best suited when the outside of the 1st test is dependent on the inside of the 2nd test.

