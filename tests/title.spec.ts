
import {test, expect} from '@playwright/test';

/*syntax
test("title of the test", () => {
    //test takes two arguments: name of the test and a function named callback
    //the callback function contains the actual test steps
})*/

//PLW has given us a set of fixtures
//These fixtures are available of accessible globally throughtout the tests
//One of the fixture is 'page' which is an instance of a browser page

test('getTitle of the page', async ({page}) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    var text = await page.title();
    console.log(text);
    await expect(page).toHaveTitle('Practice Page');
});
