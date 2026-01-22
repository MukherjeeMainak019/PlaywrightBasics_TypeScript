import{test,expect}from'@playwright/test';

test.describe('Keyboard actions demo',async()=>{

    test('Keyboard actions test',async({page})=>{

        await page.goto('https://demoqa.com/text-box');

        //Filling the form using keyboard actions.

        //Click on Full Name field.
        await page.click('#userName');

        //Type name using keyboard
        await page.keyboard.type('John Doe');

        //Press Tab to go to next field
        await page.keyboard.press('Tab');

        //Type Email using keyboard
        await page.keyboard.type('john.doe@example.com');

        //Press key Control + A to select all text in the current field (Address)
        await page.keyboard.press('Control+A');

        //Press Backspace to delete the selected text
        await page.keyboard.press('Backspace');

        //Press F12 to open developer tools
        //await page.keyboard.press('F12'); // commented to avoid interruption during test run.

    });
    
});