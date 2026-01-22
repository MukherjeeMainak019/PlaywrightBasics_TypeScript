import { test, expect, Locator } from '@playwright/test';

test('inner text vs text content', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com');

const product: Locator = page.locator('.product-title');

    const innerText = await product.first().innerText();
    const textContent = await product.first().textContent();

    const innerTextNth = await product.nth(2).innerText();
    const textContentNth = await product.nth(2).textContent();

    console.log("Inner Text: " + innerText);
    console.log("Text Content: " + textContent);
  
    console.log("Inner Text: " + innerTextNth);
    console.log("Text Content: " + textContentNth);

    //allInnerText
    const allInnerText = await product.allInnerTexts();
    console.log("All Inner Texts: " + allInnerText);

    //allTextContents
    const allTextContents = await product.allTextContents();
    console.log("All Text Contents: " + allTextContents);
});