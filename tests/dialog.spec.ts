//playwrite will automatically close the dialog or alert box when opened
//in case some action has to be performed on the dialog box, we need to use the 'page.on' event listener
//dialog.accept() to accept the dialog
//dialog.dismiss() to dismiss the dialog
//dialog.message() to get the message of the dialog
//dialog.type() to get the type of the dialog (alert, confirm, prompt, beforeunload)

import { test, expect } from '@playwright/test';

test('Alert Dialog auto handling', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#alertBtn').click(); // auto handing of dialog by playwright
    await page.waitForTimeout(5000);

    });


    test('Confirm Dialog user handling', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    
//event listener for dialog event
//the dialog event is fired whenever a dialog is opened in the page
//event has to be attached before the action which opens the dialog

        page.on('dialog', async dialog => {
            await page.waitForTimeout(5000);
            console.log(dialog.type()); // to get the type of the dialog
            
            // expect (dialog.type()).toContain('confirm') ; // tyype of dialog is confirm
            
            console.log(`Dialog message: ${dialog.message()}`);
            await expect(dialog.message()).toBe('I am an alert box!');
            await page.waitForTimeout(5000);
            await dialog.accept(); // to accept the dialog
            // await dialog.dismiss(); // to dismiss the dialog
        });

        // await page.locator('#confirmBtn').click();
        await page.locator('#alertBtn').click();
        // await page.locator('#demo').isVisible();
    
    });

    test('Prompt Dialog user handling', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    

        page.on('dialog', async dialog => {
            await page.waitForTimeout(5000);
            await dialog.type(); // to get the type of the dialog
            expect (dialog.type()).toContain('prompt') ;
            console.log(`Dialog message: ${dialog.message()}`);
            await expect(dialog.message()).toBe('Please enter your name:');
            await page.waitForTimeout(5000);
            await expect(dialog.defaultValue()).toContain("Harry Potter"); // to get the default value of the prompt dialog
            await dialog.accept("John"); // to accept the dialog with message
            await page.waitForTimeout(5000);
            // await dialog.dismiss(); // to dismiss the dialog
        });

        await page.locator('#promptBtn').click();
        await page.locator('#demo').isVisible();
       
    
    });

    