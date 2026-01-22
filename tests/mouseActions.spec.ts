import { test, expect, Locator, Page } from '@playwright/test';

test('mouse left click', async ({ page }) => { 

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#alertBtn').click({button: 'left'});

    await page.waitForTimeout(3000);
})


test('mouse double click', async ({ page }) => { 

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.getByRole('button', { name: 'Copy Text' }).dblclick();

    await page.waitForTimeout(3000);
})


test('mouse hover', async ({ page }) => { 

    await page.goto('https://testautomationpractice.blogspot.com/');

   const pointMe: Locator = page.getByRole('button', { name: 'Point Me' });

    await pointMe.scrollIntoViewIfNeeded();

    await pointMe.hover();

    await page.waitForTimeout(3000);
    
    await page.getByRole('link', { name: 'Mobile' }).click();

    await page.waitForTimeout(3000);
})


test('drag and drop', async ({ page }) => { 

    await page.goto('https://testautomationpractice.blogspot.com/');

   const pointMe: Locator = page.locator('#draggable');
   
   const dropHere: Locator = page.locator('#droppable');

    await pointMe.scrollIntoViewIfNeeded();

   pointMe.dragTo(dropHere);

    await page.waitForTimeout(3000);


    
})
