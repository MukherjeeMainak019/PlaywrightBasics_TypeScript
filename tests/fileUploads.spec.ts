import { test, expect, Locator } from '@playwright/test';
import path from 'path';

test('Single file upload', async ({ page }) => {

    await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html')

    const fileInput: Locator = page.locator('input[name="upfile"]');

    await expect(fileInput).toBeVisible();

    //upload a file

    await fileInput.setInputFiles('/Users/mainakmukherjee/Educator/Broadridge/Playwright_Basics/Files/sampleFile.txt');

    await page.waitForTimeout(10000);
});


test('Multiple file upload', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    const fileInput: Locator = page.locator('input[name="filesToUpload"]');

    await expect(fileInput).toBeVisible();

    //upload a file
    //multiple should be present in attribute or value

    await fileInput.setInputFiles([
        path.join('/Users/mainakmukherjee/Educator/Broadridge/Playwright_Basics/Files/sampleFile.txt'),
        path.join('/Users/mainakmukherjee/Educator/Broadridge/Playwright_Basics/Files/sampleExcel.xlsx'),
    ]);
    // this will also work for single file
    await page.waitForTimeout(10000);
});

test('Deselecting file upload', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    const fileInput: Locator = page.locator('input[name="filesToUpload"]');

    await expect(fileInput).toBeVisible();

    //upload a file
    //multiple should be present in attribute or value

    await fileInput.setInputFiles([
        path.join('/Users/mainakmukherjee/Educator/Broadridge/Playwright_Basics/Files/sampleFile.txt'),
        path.join('/Users/mainakmukherjee/Educator/Broadridge/Playwright_Basics/Files/sampleExcel.xlsx'),
    ]);
    await page.waitForTimeout(5000);

    //deselection:

   fileInput.setInputFiles([]); // empty array will deselect all files

   //deselection of specific file is not possible directly.

   await page.waitForTimeout(5000);
});

test('Buffer memory file upload', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    const fileInput: Locator = page.locator('input[name="filesToUpload"]');

    await expect(fileInput).toBeVisible();

    await fileInput.setInputFiles({
        name: 'playwrightData.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('Contains Playwright data')
    });

    await page.waitForTimeout(5000);

    //deselection:

   fileInput.setInputFiles([]);

   await page.waitForTimeout(5000);
});


