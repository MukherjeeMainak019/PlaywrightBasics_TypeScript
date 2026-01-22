//CSS : Cascading Style Sheets

//Syntax for CSS to locate elements
//tag#id
//tag.class
//tag[attribute="value"]
//tag.class[attribute="value"]

//Advanced CSS selectors
//.class
//#id
//[attribute="value"]
//.class[attribute="value"]


import { test, expect, Locator } from '@playwright/test';

test('CSS', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com/');
    
    //tag#id
    const searchBox  : Locator = await page.locator("input#small-searchterms");
    await expect(searchBox).toBeVisible();
    await searchBox.fill("computer");

    //tag.class
    const searchButton  : Locator = await page.locator("input.search-box-button");
    await expect(searchButton).toBeVisible();
    await searchButton.click();

    //tag[attribute="value"]
    const firstProduct  : Locator = await page.locator("input[name='q']");
    //const firstProduct  : Locator = await page.locator("[name='q']"); // alternatively
    await expect(firstProduct).toBeVisible();
    await firstProduct.click();

    //tag.class[attribute="value"]
    const addToCartButton  : Locator = await page.locator('input.search-box-text[value="Search store"]');
    await expect(addToCartButton).toBeVisible();
    await addToCartButton.click();

    //.class
    const successNotification  : Locator = await page.locator('.bar-notification.success');
    await expect(successNotification).toBeVisible();

    //#id
    const shoppingCartLink  : Locator = await page.locator('#topcartlink');
    await expect(shoppingCartLink).toBeVisible();
    await shoppingCartLink.click();

    // [attribute="value"]
    const termsOfServiceCheckbox  : Locator = await page.locator('input[name="termsofservice"]');
    await expect(termsOfServiceCheckbox).toBeVisible();
    await termsOfServiceCheckbox.check();

    //.class[attribute="value"]
    const checkoutButton  : Locator = await page.locator('.button-1[value="Checkout"]');
    await expect(checkoutButton).toBeVisible();
    await checkoutButton.click();


    //OR with CSS selectors:
    //, represents OR operator in CSS selectors.
    const searchBox2  : Locator = await page.locator("input#small-searchterms, input.search-box-button, input[name='q']");

    //Example 1 : Class A OR Class B
    page.locator('.btn-primary, .btn-secondary');

    //Example 2 : Different tags (OR)
    page.locator('button, input[type="submit"]');

    //Using AND:
    page.locator('button.primary[type="submit"]');

    //Using Multiple AND conditions:
    page.locator('input.form-control[name="username"][type="text"]');

    //Combining AND and OR:
    page.locator('div.container.primary, div.container.secondary');

    // Best practice is to use OR.
    //If at all AND is to be used, go with locator chaining instead of combining multiple AND conditions in a single CSS selector.

    //Locator chaining for AND conditions:
    page.locator('parent').locator('child');
    page.locator('div.card').locator('button.primary');

/* Why chaining is better than combining multiple AND conditions in a single selector?
Better readability

Easier debugging

Safer when DOM changes

Avoids long complex selectors */


})