import { test, expect, Locator } from '@playwright/test';

test('static web table', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const table : Locator = await page.locator("table[name = 'BookTable'] tbody");

  await expect(table).toBeVisible();

  //count number of rows

  //const rows : Locator = await page.locator("table[name = 'BookTable'] tbody tr"); // returns all the rows with header

  const rows : Locator = await table.locator("tr"); //chaning of locators

  await expect(rows).toHaveCount(7); // approach 1

  const rowCount = await rows.count(); // approach 2    
  expect(rowCount).toBe(7);

  //count number of colomns in web tables

    const cols : Locator = await table.locator("th"); // returns all the colomns
    await expect(cols).toHaveCount(4);

    const colCount = await cols.count();
    expect(colCount).toBe(4);

    // read from 2nd row 
    const secondRow : Locator = await rows.nth(2).locator("td");

    const secondRowTexts : string[]= await secondRow.allInnerTexts();

    console.log("Second row values are: ");

    for(const text of secondRowTexts){
      console.log(text);
    }

    await expect(secondRowTexts).toEqual(['Learn Java', 'Mukesh', 'Java', '500']);

    await expect(secondRow).toHaveText(['Learn Java', 'Mukesh', 'Java', '500']);

// read all data from the table excluding header

const allRowData = await rows.all();    
for (let row of allRowData.slice(1)) { //slicing to exclude header
    const rowData = await row.locator("td").allInnerTexts();
    console.log(rowData);
    console.log(rowData.join('\t') ); // tab space between colomns
}

//where ever author is Mukesh, print the book name
for (let row of allRowData.slice(1)) {
    const author = await row.locator("td").nth(1).innerText(); // nth(1) because author is in 2nd colomn
    if (author === 'Mukesh') {
        const bookName = await row.locator("td").first().innerText(); // first beacause book name is in first colomn
        console.log(`Book name where author is Mukesh: ${bookName}`);
    }
}

});

test('Dynamic web table', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/dynamic-table');

    const table : Locator = await page.locator("table.table tbody");
    await expect(table).toBeVisible();

    //capture all the rows
    const rows : Locator[] = await table.locator("tr").all();
    console.log(`Total number of rows: ${rows.length}`);
    
    for(const row of rows){
        const processName = await row.locator("td").nth(0).innerText(); // nth(0) because process name is in first colomn
        console.log(processName);

        if(processName === 'Chrome'){
            const memory = await row.locator("td").nth(1).innerText(); //nth(1) because memory is in second colomn
            console.log(`Memory used by Chrome is: ${memory}`);
        }
    }

});