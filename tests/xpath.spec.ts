//XML path

//absolute Xpath : Full path from root node to the desired node. Starts with single slash (/)
//Syntax: /tagname1/tagname2/tagname3.../targettagname[@attribute='value']

//relative Xpath : Partial path from any node to the desired node. Starts with double slash (//)    
//Syntax: //tagname[@attribute='value']

//Basic Xpath expressions:

//Syntax:
//1. //tagname[@attribute='value']
//2. //tagname[text()='value']
//3. //tagname[contains(@attribute,'value')]
//4. //tagname[contains(text(),'value')]

//example:
//1. //input[@id='input-email']
//2. //a[text()='Register']
//3. //input[contains(@id,'email')]
//4. //a[contains(text(),'Register')]

//XPath axes : to navigate through the nodes
//ex: parent, child, sibling, ancestor, descendant etc

//example:
//1. //input[@id='input-email']/parent::div
//2. //label[text()='E-Mail Address']/following-sibling::input
//3. //input[@id='input-email']/ancestor::form
//4. //form[@id='form-login']/descendant::input

//Note: Playwright recommends using its built-in locators over XPath for better readability and maintainability.
//However, XPath can still be used when necessary.

//syntax for starts-with
//1. //tagname[starts-with(@attribute,'value')]
//2. //tagname[starts-with(text(),'value')]

//example:
//1. //input[starts-with(@id,'email')]
//2. //a[starts-with(text(),'Regis')]

//syantax for ends-with
//1. //tagname[ends-with(@attribute,'value')]
//2. //tagname[ends-with(text(),'value')]

//example:
//1. //input[ends-with(@id,'mail')]
//2. //a[ends-with(text(),'ister')]

import { test, expect, Locator } from '@playwright/test';

test('xpath demo', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com/');
    
  //Absolute Xpath : Not recommended as it is brittle and can break easily with any change in the DOM structure.
  const logo : Locator = await page.locator("//html/body/div[4]/div[1]/div[1]/div[1]/a/img");
  await expect(logo).toBeVisible();

  //Relative Xpath
  const logo2 : Locator = await page.locator("//img[@alt='Tricentis Demo Web Shop']");
  await expect(logo2).toBeVisible();
})


test('More than 1 element is present', async ({ page }) => {

  //findWebElements example in selenium
  //webElements is a list of elements.
  //webElement ele. ele.size() gives the count of elements found.


  //count.
  await page.goto('https://demowebshop.tricentis.com/');
    
  //using contains.
  //correlating with find elements in selenium.

  //Find product with title containing 'Computer'
  const products : Locator = await page.locator("//h2/a[contains (@href, 'computer')]");
  const productsCount : number = await products.count(); // size = 4

  await expect(productsCount).toBeGreaterThan(1); //assertion.

  //iterrate through the list of products and print their names.
  for(let i=0; i<productsCount; i++) {

    //getText(i); //selenium.

    console.log ( await products.nth(i).innerText() );

    const productName = await products.nth(i).innerText();

    //This line creates a new productName for each loop iteration, not reassigning an existing one.
    //What actually happens
    //Each iteration of the loop creates a new block scope
    // //productName exists only inside that iteration
    //A new productName is created each time
    //There is no reassignment

    //What would not be allowed is:
    // const productName;
    // for (let i = 0; i < 5; i++) {
    // productName = await products.nth(i).innerText(); // ❌ Error
    // }

   if (productName === ('Build your own computer')) { // toInclude

    console.log('Found the product: ' + productName);
    break;
    }
    else {
      console.log('Product not found yet: ' + productName);
    }   
  }

  //using nth to get specific element from the list.
  //here index is zero based.
  console.log ( await products.nth(3).innerText() );

  // strict mode violation example
  await products.click(); //throws error as more than 1 element is found.
  
})

test('allTextContains', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com/');
    
  //using contains.
  //correlating with find elements in selenium.

  //Find product with title containing 'Computer'
  const products : Locator = await page.locator("//h2/a[contains (@href, 'computer')]");
  
  //return type of allTextContents is promise of string array.
  //so we need to use await to get the actual array.

  let productsTitles : string [] = await products.allTextContents();

  //in operator in for loop is based on index.
  //so we are using for..of loop here to get actual values from the array.


  for (const title of productsTitles) {
    console.log(title);

    if (title.includes('Build your own computer')) {
      console.log('Found the product: ' + title);
      break;
    }
    else {
      console.log('Product not found yet: ' + title);
    } 
  } 
  
})

test('traversing parent to child', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com/');
    
  //traversing from parent to child using xpath

  //1st way: using direct child operator (/)
  const searchBox1 : Locator = await page.locator("//div[@class='column follow-us']/ul/li");  

  //2nd way: using descendant axis
  const searchBox2 : Locator = await page.locator("//div[@class='column follow-us']//li");

  //get last elemnrent from the list by index
    const searchBox3 : Locator = await page.locator("//div[@class='column follow-us']/ul/li[5]");
  
  //get last elemnrent from the list by last keyword only.
    const searchBox4 : Locator = await page.locator("//div[@class='column follow-us']/ul/li[last()]");

  //get element from the list by position
  //position starts from 1 unlike index which starts from 0
    const searchBox5 : Locator = await page.locator("//div[@class='column follow-us']/ul/li[position()=3]");
})


test('dynamic button', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');
    
  //dynamic button example  
  //button changes its id attribute value on every page refresh.
  //so we cannot use id attribute to locate the button.
  //we will use other attributes which are static.

  //xpath using multiple attributes
  const button : Locator = await page.locator("//button[text() = 'STOP' or text() = 'START']");
  await button.click();

  await page.waitForTimeout(2000);

  await button.click();

   await page.waitForTimeout(2000); 

   //CSS locator for the same button
   const button1 : Locator = await page.locator("button[name='START'],[button[name='STOP']");
})

