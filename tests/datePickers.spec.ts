
//important: Same cde will not work for date pickers as they are not simple input boxes.
//date pickers have complex html structure. Custom code is needed for each date picker.
//JQuery date picker.
//Bootstrap date picker.
//Range type date pickers.
// if we focus on one application, date picker code will be same throught, if date picker has been used in different places.
//date picker will be purely logic based implementation rather than locator based implementation.




import { test, expect, Locator, Page } from '@playwright/test';

test('JQuery Fill', async ({ page }) => { 

    await page.goto('https://testautomationpractice.blogspot.com/');

    const dateInput = await page.locator('#datepicker');

    await expect(dateInput).toBeVisible();
    await expect(dateInput).toBeVisible();

    await dateInput.fill('12/25/2024'); //MM/DD/YYYY

    await page.waitForTimeout(3000);


})


test('JQuery with logic', async ({ page }) => { 

    await page.goto('https://testautomationpractice.blogspot.com/');

    const dateInput = await page.locator('#datepicker');

    await expect(dateInput).toBeVisible();
    await expect(dateInput).toBeVisible();

    //set targte date:

    let year = '2027';
    let month = 'February';
    let day = '28';

    //click on date picker icon to open the calendar.

    await dateInput.click();

    //logic to select the date from calendar.

    // frist select year
    //then month
    // then day

    while (true) {

        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if (currentMonth === month && currentYear === year) {

            break;

        }

        // click on next button : Future date selection
        await page.locator('.ui-datepicker-next').click();

        // click on previous button : Past date selection
        // await page.locator('.ui-datepicker-prev').click();


    }

    const allDates = await page.locator(".ui-datepicker-calendar td").all();

    console.log("Total dates found: " + allDates.length);

    for (let date of allDates) {
        const dateText = await date.innerText();

        if (dateText === day) {

            await date.click();
            break;
        }
        else {
            console.log("Date not matched: " + dateText);
        }
    }

    console.log("Date input value is " + await dateInput.inputValue());


    await page.waitForTimeout(3000);
})


 async function selectDate(year: string, month: string, day: string, page: Page, ifFuture: boolean) {
//why async function? because we are using await inside the function.

    while (true) {

        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if (currentMonth === month && currentYear === year) 
            { 
                break; 
            }

        if (ifFuture) 
            {
            await page.locator('.ui-datepicker-next').click();
            }
        else 
            {
            await page.locator('.ui-datepicker-prev').click();
            }

        }

        const allDates = await page.locator(".ui-datepicker-calendar td").all();

        for (let date of allDates) 
            {
            const dateText = await date.innerText();

            if (dateText === day) {

                await date.click();
                console.log("Date matched and clicked: " + dateText);
                break;
             }
            else {
                console.log("Date not matched: " + dateText);
            }
        }
    }

test('Reusable function', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const dateInput = await page.locator('#datepicker');

    await expect(dateInput).toBeVisible();
    await expect(dateInput).toBeVisible();

    await dateInput.click();

    await selectDate('2026', 'January', '9', page, false);  
    
    await expect(dateInput).toHaveValue('12/15/2025');

})


test('Bootstrap date picker', async ({ page }) => { 

    await page.goto("https://www.booking.com/");

    await page.waitForTimeout(5000);

    //click on datepicker field to open the calendar.

    await page.getByTestId('searchbox-dates-container').click();

    //check in date selection
    let checkInYear = '2027';
    let checkInMonth = 'February';
    let checkInDay = '20';

    //Navigate through the calendar to select desired checkin month and year.
    while (true) {
        const checkInMonthYear = await page.locator("h3[aria-live='polite']").nth(0).innerText();

        const currentMonth = checkInMonthYear.split(' ')[0].trim();
        const currentYear = checkInMonthYear.split(' ')[1].trim();

        if (currentMonth === checkInMonth && currentYear === checkInYear) {
            break;
        }

        else {
            await page.locator("button[aria-label='Next month']").first().click();
        }
    }

    let allDataes = await page.locator('table.b8fcb0c66a tbody').nth(0).locator('td').all();

    let checkInDateFound = false;

    for (let date of allDataes) {

        const dateText = await date.innerText();

        if (dateText === checkInDay) {

            await date.click();
            checkInDateFound = true;
            console.log("Check-in date selected: " + dateText);
            break;
        }
    }

    expect (checkInDateFound).toBeTruthy();

    //check out date selection
    let checkOutYear = '2027';
    let checkOutMonth = 'March';
    let checkOutDay = '5';

    //Navigate through the calendar to select desired checkin month and year.
    while (true) {
        const checkOutMonthYear = await page.locator("h3[aria-live='polite']").nth(1).innerText();

        const currentMonth = checkOutMonthYear.split(' ')[0].trim();
        const currentYear = checkOutMonthYear.split(' ')[1].trim();

        if (currentMonth === checkOutMonth && currentYear === checkOutYear) {
            break;
        }

        else {
            await page.locator("button[aria-label='Next month']").first().click();
        }
    }

    allDataes = await page.locator('table.b8fcb0c66a tbody').nth(1).locator('td').all();

    let checkOutDateFound = false;

    for (let date of allDataes) {

        const dateText = await date.innerText();

        if (dateText === checkOutDay) {

            await date.click();
            checkOutDateFound = true;
            console.log("Check-out date selected: " + dateText);
            break;
        }
    }

    expect (checkOutDateFound).toBeTruthy();

    await page.waitForTimeout(5000);

})

// practice website for date pickers: https://www.dummyticket.com/dummy-ticket-for-visa-application/
