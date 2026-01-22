//Xpath axes define the relationship between current node and other nodes in the XML document.
//They allow us to navigate through the document structure in various ways.

//primary XPath axes include:
//1. child: Selects all children of the current node.
//2. parent: Selects the parent of the current node.
//3. ancestor: Selects all ancestors (parent, grandparent, etc.) of the current node.
//4. descendant: Selects all descendants (children, grandchildren, etc.) of the current node.
//5. following-sibling: Selects all siblings after the current node.
//6. preceding-sibling: Selects all siblings before the current node.
//7. following: Selects everything in the document after the closing tag of the current node.
//8. preceding: Selects everything in the document before the opening tag of the current node.
//9. self: Selects the current node itself.

//is used when there is no direct attribute for a element
//here we take help to the neighouring elements to locate the element
// we can go up and down the hierarchy to locate the element using xpath
//in css we can go only down the hierarchy.

import { test, expect, Locator } from '@playwright/test';

test('self', async ({ page }) => {

  await page.goto('https://www.w3schools.com/html/html_tables.asp');
  
  //syntax for self axis
  //tagname[@attribute='value']/self::tagname

  const elementGermany : Locator = await page.locator("//td[text()='Germany']/self::td");
  await expect(elementGermany).toHaveText('Germany');
})

test('parent', async ({ page }) => {

  await page.goto('https://www.w3schools.com/html/html_tables.asp');
  
  //syntax for parent axis
  //tagname[@attribute='value']/parent::tagname
  
  const elementParent : Locator = await page.locator("//td[text()='Germany']/parent::tr");
  await elementParent.textContent().then(value => console.log(value));
  console.log( await elementParent.textContent());

  await expect(elementParent).toContainText('Maria Anders');
})

test('child', async ({ page }) => {

  await page.goto('https://www.w3schools.com/html/html_tables.asp');
  
  //syntax for child axis
  //tagname[@attribute='value']/child::tagname
  
  const elementChild : Locator = await page.locator("//table[@id='customers']//tr[3]/child::td");
  await expect(elementChild).toHaveCount(3);
})

test('ancestor ', async ({ page }) => {

  await page.goto('https://www.w3schools.com/html/html_tables.asp');
  
  //syntax for ancestor axis
  //tagname[@attribute='value']/ancestor::tagname
  //tagname[@attribute='value']/ancestor::* (all the ancestors)
  
  const elementAncestor : Locator = await page.locator("//td[text()='Germany']//ancestor::table");
  await expect(elementAncestor).toHaveAttribute('id','customers');
})

test('descendant ', async ({ page }) => {

  await page.goto('https://www.w3schools.com/html/html_tables.asp');
  
  //syntax for descendant axis
  //tagname[@attribute='value']/descendant::tagname
  //tagname[@attribute='value']/descendant::* (all the descendants)
  //get all the td elements under table
  
  const elementDescendant : Locator = await page.locator("//table[@id='customers']//descendant::td");
  await expect(elementDescendant).toHaveCount(18);
})

test('following', async ({ page }) => {

  await page.goto('https://www.w3schools.com/html/html_tables.asp');
  
  //syntax for following axis
  //tagname[@attribute='value']/following::tagname
  //tagname[@attribute='value']/following::* (all the following nodes)
  //get all the td elements under table
  
  const following : Locator = await page.locator("//td[normalize-space()='Germany']/following::td");
  const followingOne : Locator = await page.locator("//td[normalize-space()='Germany']/following::td[1]");
  await expect(followingOne).toHaveText('Centro comercial Moctezuma');
})

test('following-sibling', async ({ page }) => {

  await page.goto('https://www.w3schools.com/html/html_tables.asp');
  
  //syntax for following sibling axis
  //tagname[@attribute='value']/following-sibling::tagname
  //tagname[@attribute='value']/following-sibling::* (all the following sibling nodes)
  //get all the td elements under table
  
  const followingSibling : Locator = await page.locator("//td[normalize-space()='Germany']/following-sibling::td");
  await expect(followingSibling).toHaveCount(0);

  const followingSiblingPresent : Locator = await page.locator("//td[normalize-space()='Maria Anders']/following-sibling::td");
  await expect(followingSiblingPresent).toHaveCount(1);
})

test('preceeding', async ({ page }) => {

  await page.goto('https://www.w3schools.com/html/html_tables.asp');
  
  //syntax for preceeding axis
  //tagname[@attribute='value']/preceding::tagname
  //tagname[@attribute='value']/preceding::* (all the following sibling nodes)
  //get all the td elements under table
  
  const followingSibling : Locator = await page.locator("//td[normalize-space()='UK']/preceding::td");
  await expect(followingSibling).toHaveCount(11);
})

test('preceeding-sibling', async ({ page }) => {

  await page.goto('https://www.w3schools.com/html/html_tables.asp');
  
  //syntax for preceeding-sibling axis
  //tagname[@attribute='value']/preceding-sibling::tagname
  //tagname[@attribute='value']/preceding-sibling::* (all the following sibling nodes)
  //get all the td elements under table
  
  const followingSibling : Locator = await page.locator("//td[normalize-space()='UK']/preceding-sibling::td");
  await expect(followingSibling).toHaveCount(2);
})

