//Simple understanding: From browser we create context and from context we create page.
//Browser can have multiple contexts and context can have multiple pages.
//Browser -> Context -> Page
//Bropwser is like a real browser (Chrome, Firefox, etc)
//Context is like an window
//Page is like a tab in the window
//Context: We can have multiple context for multiple users/apps for the same browser instance.
//Context: provides a way to operate multiple independent browser sessions.
//Page: can be popup, window, tab
//browser fixture is available in test directly

import { test, expect, Page, chromium, firefox, webkit} from '@playwright/test';   

test('Context fixture', async ({ context }) => {

        //create context

        const page : Page = await context.newPage(); // by dafult chrome browser will be launched as given in the config file.

        await page.goto('https://testautomationpractice.blogspot.com/');



});


test('Browser Fixture', async ({ browser }) => {

        const context = await browser.newContext();
        const page : Page = await context.newPage(); // by dafult chrome browser will be launched as given in the config file.
        await page.goto('https://testautomationpractice.blogspot.com/');



});

test('Chromium', async ({  }) => {

        // here we are creating our own browser instance and therefore we don't need browser fixture

        const browser = await chromium.launch({ headless: false }); // launch chromium browser
        const context = await browser.newContext();
        const page : Page = await context.newPage();
        await page.goto('https://testautomationpractice.blogspot.com/');



});

test('Webkit', async ({  }) => {

        
        
        const browser = await webkit.launch({ headless: true });
        const context = await browser.newContext();
        const page : Page = await context.newPage();
        await page.goto('https://testautomationpractice.blogspot.com/');



});

test('2 pages with same context', async ({  }) => {

    

        const browser = await chromium.launch({ headless: false }); 
        const context = await browser.newContext();

        const page1 : Page = await context.newPage(); // creating first page within the same context
        await page1.goto('https://testautomationpractice.blogspot.com/');

        const page2 : Page = await context.newPage(); // creating second page within the same context
        await page2.goto('https://www.google.com/');

       console.log( await context.pages().length); // it will give 2 as we have 2 pages in the same context


});


test('handle pages', async ({  }) => {

    

        const browser = await chromium.launch({ headless: false }); 
        const context = await browser.newContext();

        const parentpage : Page = await context.newPage(); // creating only 1 page here.
        await parentpage.goto('https://testautomationpractice.blogspot.com/');

       //if we put the event lister after click then it will not work as the event is fired before the listener is attached.
       //waitForEvent returns a promise which can be pending, fulfilled or rejected.
       //here waitForEvent is waiting for the page, untill the page is opened the event cannot be fulfilled.
       //so both the statements need to be executed in parallel.


        const [childPage] = await Promise.all
        ([               
        context.waitForEvent('page'),  // wait for new page event 
        parentpage.locator('button:has-text("New Tab")').click() // opens new tab
        ]);


        // Approach 1: switch between pages using context.pages()
        const pages : Page[] = await context.pages(); //returns array of all pages in the context
        console.log('Total pages: ' + pages.length);
        const newTabPage = pages[pages.length -1]; // get the last page which is the new tab
        await newTabPage.waitForLoadState(); // wait for the new tab to load
        console.log('New tab title (Approach 1): ' + await newTabPage.title());


        pages[0]; // parent page - closed
        pages[1]; // child page


       
        await pages[0].title();
        await pages[0].bringToFront(); // bring parent page to front
        console.log('Parent page title (Approach 1): ' + await pages[0].title());

        await pages[1].title();
        await pages[1].bringToFront(); // bring parent page to front
        //close page
        await pages[1].close();
        console.log('Child page title (Approach 1): ' + await pages[1].title());

        //Approach 2:

        // await parentpage.title();
        // await parentpage.bringToFront(); // bring parent page to front
        // console.log('Parent page title (Approach 1): ' + await parentpage.title());

        await childPage.title();
        await childPage.bringToFront(); // bring parent page to front
        console.log('Parent page title (Approach 1): ' + await childPage.title());

        //approach 3: using for loop : given the loop below.


});

test('multiple pop ups', async ({  }) => {  

//trigger popup evwent and handle the popup

        const browser = await chromium.launch({ headless: false }); 
        const context = await browser.newContext();
        const page : Page = await context.newPage(); 
        await page.goto('https://testautomationpractice.blogspot.com/');

        await Promise.all([
             page.waitForEvent('popup'), //wait for the popup event
             page.locator('#PopUp').click() // trigger the popup
        ]);

        const allPopups = await context.pages(); // get all the pages in the context
        console.log('Total pages including main page and popups: ' + allPopups.length);

        console.log('Main page URL: ' + allPopups[0].url());
        console.log('First popup URL: ' + allPopups[1].url());

        for(const pw of allPopups)
            {
                const title = await pw.title();

                if(title.includes('Selenium'))
                {
                    console.log('inside for loop')
                    await pw.getByRole('link', { name: 'Register now!' }).click();
                    await page.waitForTimeout(3000);
                    await pw.close();
                    await page.waitForTimeout(5000);
        }

        else
        {
            console.log('No action for this page with title: ' + title);
        }
    }       

});

test('authenticated pop ups', async ({  }) => {  

    const browser = await chromium.launch({ headless: false }); 

    // const context = await browser.newContext();
   
    const context = await browser.newContext({httpCredentials : { username: 'admin', password: 'admin' }}); // passing credentials while creating context
    
    const page : Page = await context.newPage(); 

    // await page.goto('https://the-internet.herokuapp.com/basic_auth');

    //Approach 1: embed username and password in the URL
    //await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    // await page.waitForTimeout(5000);

    //Approach 2: pass the login along with browser context.
    //this is the best approach as credentials are not visible in the URL
    
    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    await page.waitForTimeout(5000);

    
// when chrome launching can we accept the location or set locations permissions?

/*
const context = await browser.newContext({
  permissions: ['geolocation', 'camera'],
  geolocation: { latitude: 12.9716, longitude: 77.5946 }, // optional but recommended
}); 
here chrome will ask for location and camera permissions and playwright will auto accept them.
*/        

/*
Grant permissions for a specific domain. This is safer for real-world apps.
await context.grantPermissions(['geolocation', 'camera'], {
  origin: 'https://myapp.com'
});

await context.setGeolocation({
  latitude: 12.9716,
  longitude: 77.5946
}); */

//Camera persmissions can be given only in headful mode.

/*
const browser = await chromium.launch({
  headless: false,
  args: [
    '--use-fake-ui-for-media-stream',
    '--use-fake-device-for-media-stream'
  ]
});

const context = await browser.newContext({
  permissions: ['camera', 'geolocation'],
  geolocation: { latitude: 12.9716, longitude: 77.5946 }
});

const page = await context.newPage();
await page.goto('https://myapp.com/video');

*/


});
