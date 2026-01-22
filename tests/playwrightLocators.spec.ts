//PLW does not recommend top use xpath or css selectors
//They encourage to use their built in locators instead. First priorrity
//Second priority is to use css selectors and last priority is xpath selectors.

// by.id("value").snedkeys()
// best advised to got with css, #value

//below are examples of built in locators in playwright
/*page.getByRole() 
page.getByText() // find elements by their text content, we can match a substring  or exact string
page.getByLabel() 
page.getByPlaceholder() 
page.getByAltText() // mostly used for images, images have alt attribute. img or area tags
page.getByTitle() 
page.getByTestId() */

    //return type of these methods is Locator. Locator is another fixture in playwright.
    //locator has to be imported.
    //here await is optional because these are not async function and it does not return a promise.
    //But it is a good practice to use await for locator creation.
    //It will help to avoid confusion in future.

import { test, expect, Locator } from '@playwright/test';

test('getByAltText', async ({ page }) => {

  await page.goto('https://demo.nopcommerce.com/');
    //example of getByAltText locator
    const logo: Locator =  await page.getByAltText('nopCommerce demo store'); 
    await expect(logo).toBeVisible();
})

test.only('getByText', async ({ page }) => {

  await page.goto('https://demo.nopcommerce.com/');

    //example of getByText locator
    //span tag or p tag or div tag etc
    // <span>Welcome to our store</span>
    // <p>Welcome to our store</p>
    //here we get the inner text of the element.
    //mostly span, p and div tags have inner text without any attribute.
    //here it is case sensitive

    page.getByText('Welcome to our store'); //exact match
    //page.getByText('Welcome'); //substring match
    const welcomeMsg: Locator = await page.getByText('Welcome to our store'); 
    await expect(welcomeMsg).toBeVisible();    
})

test.only('getByRole() ', async ({ page }) => {

  await page.goto('https://demo.nopcommerce.com/');

    //role is mostly not an attribute of html element.
    //role is an accessibility attribute.
    //for example button tag has role button, a tag has role link etc.
    //role includes butons, links, checkboxes, headings etc
    //we can also use name attribute along with role to make the locator more specific.

    //lets see PLW documentation for getByRole.
    //implicity defined role means the tag name and the role name are same.
    //explicitly defined role means the tag name and the role name are different.

    await page.getByRole('link', { name: 'Register' }).click();
    const registerHeader: Locator = await page.getByRole('heading', { name: 'Register' });
    await expect(registerHeader).toBeVisible();

})

test.only('getByLabel() ', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/');
    await page.getByRole('link', { name: 'Register' }).click();
    // const registerHeader: Locator = await page.getByRole('heading', { name: 'Register' });
    // await expect(registerHeader).toBeVisible();

  //use for form controls.
  //infront of the form we generally see a label.
  //we can use that label to locate the form control.
  //form controls are input, select, textarea etc.

    await page.getByLabel('First name:').fill('John');
    await page.getByLabel('Last name:').fill('Wick');
    await page.getByLabel('Email:').fill('john.wick@example.com');
    await page.pause();

})

test.only('getByPlaceholder() ', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/');

    //Finds elements by their placeholder text.
    //placeholder is an attribute of input, textarea tags.
    //we can use that attribute to locate elements.
    //best for input without a label but with a placeholder attribute.

    await page.getByPlaceholder('Search store'). fill('Laptop'); // fill = sendKeys in selenium
    await page.pause();
})

test.only('getByTitle() ', async ({ page }) => {

    await page.goto('https://playwright.dev/docs/locators');

    //Finds elements by their title attribute.
    //title is an attribute of any html element.
    //we can use that attribute to locate elements.
    //best for elements without a label but with a title attribute.

    const logo: Locator = await page.getByTitle('FrameLocator'); 
    await expect(logo).toBeVisible();
    await expect(logo).toHaveText('FrameLocator');
    await logo.click();

})



test.only('getByTestId ', async ({ page }) => {

    await page.goto('https://www.facebook.com'); 

    //attrbute will be like this: data-testid.

    //locate elements by the data-testid attribute.
    //data-testid is a custom attribute.
    //we can use that attribute to locate elements.
    //mostly used in react applications.

    await page.getByTestId('royal-email').fill('john.royal@example.com');

    await page.pause();


})



