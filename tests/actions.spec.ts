import { test, expect, Locator } from '@playwright/test';

test('inputValue and Fill', async ({ page }) => { // senkeys

  await page.goto('https://testautomationpractice.blogspot.com/');

  const textboxName : Locator = await page.locator('#name');

    expect(textboxName).toBeVisible();
    expect(textboxName).toBeEnabled();

    await textboxName.fill('Playwright Test');

    await page.waitForTimeout(3000);

   const maxlength : string | null = await textboxName.getAttribute("maxlength"); // return then value of maxlength attribute
    expect(maxlength).toBe('15');


   const maxlengthAny : any = await textboxName.getAttribute("maxlength"); // we can also 

    expect(maxlength).toBe('15');

    await page.waitForTimeout(3000);

    console.log(await textboxName.textContent());   // text is not displayed in the html so returns empty.
    console.log(await textboxName.inputValue());   // to get the value from textbox use inputValue() method.

    await  page.waitForTimeout(3000);

  
});


test('radio button', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const maleradio : Locator = await page.locator('#male');

    await expect(maleradio).toBeVisible();
    await expect(maleradio).toBeEnabled();

   // maleradio.isUnchecked(); // returns true or false
   
    expect(await maleradio.isChecked()).toBe(false);

    await maleradio.check(); // will select the radio button

    await  page.waitForTimeout(3000);

    expect(await maleradio.isChecked()).toBe(true);

    await  page.waitForTimeout(3000);

    await expect(maleradio).toBeChecked(); // alternative way to verify if radio button is checked ; returns true or false
   
    
});

test('checkbox', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const checkboxSunday : Locator = await page.getByLabel('Sunday');

    await expect(checkboxSunday).not.toBeChecked(); // not to be checked

    checkboxSunday.check(); // will select the checkbox

    await page.waitForTimeout(3000);

    await expect(checkboxSunday).toBeChecked();
    
    await page.waitForTimeout(3000);

    checkboxSunday.uncheck(); // will unselect the checkbox

    await page.waitForTimeout(3000);
    
});


test('checkbox using condition', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const checkboxSunday : Locator = await page.getByLabel('Sunday');

    checkboxSunday.check(); // will select the checkbox
  
    console.log("Checkbox is checked by default");
        
    await page.waitForTimeout(3000);
    

        if(await checkboxSunday.isChecked) // true : isChecked = true
    {
        console.log("Checkbox is checked now unchecking it");
        checkboxSunday.uncheck(); // will select the checkbox
        await page.waitForTimeout(3000);
    }
    
    
});

test('Single select dropdowns : approach 1', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const dropdown : Locator = await page.locator('#country');

    await dropdown.selectOption('India'); // select by visible text

    await page.waitForTimeout(3000);

    await dropdown.selectOption({ label: 'Canada' }); // select by label

    //value as well.
    await page.waitForTimeout(3000);

    await dropdown.selectOption('japan'); // select by value

    await page.waitForTimeout(3000);

    await dropdown.selectOption({ index: 2 }); // select by index

    await page.waitForTimeout(3000);
    
});

test('Single select dropdowns : approach 2', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const dropdown : Locator = page.locator('#country>option'); // 10 values

    const dropdownOp : Locator = await page.locator('#country');

    const options : string[] =  await dropdown.allTextContents();

    for(const option of options)
    {
        // get All options and click on the desired option  
        console.log(option);

        if(option.trim() =='France')
        {
            await dropdownOp.selectOption(option.trim());
            await page.waitForTimeout(3000);
            break;
        }
    }

    
});


test('Multi select', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const dropdown : Locator = page.locator ('#colors') 
    
    dropdown.selectOption (['Red', 'Blue']); // using visible text

    await page.waitForTimeout(3000);

    dropdown.selectOption (['yellow', 'white']); // using value 

    await page.waitForTimeout(3000);

    dropdown.selectOption ([{label : 'Red'}, {label : 'Blue'}]); // using value 
    
    await page.waitForTimeout(3000);

    dropdown.selectOption ([{index : 3}]); // using value 

    await page.waitForTimeout(3000);
    
});

test('Bootstrapped dropdown', async ({ page }) => {

    // no <select> tag is used in bootstrapped dropdowns

    //ajax call during dropdown population
    //no select tag is present.
    
    await page.goto('https://www.flipkart.com/');

    await page.locator ("input[name=q]").fill("smart"); // search text

    await page.waitForTimeout(5000);

    //emulate a focused page:
    //short cut : win: ctrl + shift + p  , mac: cmd + shift + p
    //search : emulate focused.

    const options : Locator = page.locator("ul>li");

    console.log (await options.count());

    for (let i=0; i< await options.count(); i++)
    {
        const optionText = await options.nth(i).innerText();
        console.log (optionText);

        if (optionText.trim() === "smartphone")
        {
            options.nth(i).click();
            await page.waitForTimeout(3000);
            break;
        }
    }
});