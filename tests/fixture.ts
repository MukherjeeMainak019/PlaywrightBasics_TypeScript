//Fixtures:
//Fixtures are link functions which holds the concept same as hooks.
//They are used to set up preconditions or state before tests are run.
//Fixtures can be shared across multiple test files to maintain consistency in test setups.
//In addition to the hooks like beforeEach and afterEach, fixtures can also be used to create reusable components for tests.


/*What exactly is base here?
test is the core test function provided by Playwright.
base is simply an alias (a renamed reference) to that same function. 
The alias is used by convention when you want to extend test with custom fixtures.*/



//test with import has the feature for playwright.
import { test as base } from '@playwright/test';

type MyFixtures = { 
    helloWorld: void;
    //define your user defined fixtures here
};


 export const test = base.extend<MyFixtures>({

    helloWorld: async ({}, use) => {

        //anything that we put before use() will be executed before each test
        console.log('Before executing test');

        await use();

        
        //anything that we put after use() will be executed after each test
        console.log('After executing test');
    },
});


/*
type MyFixtures = { 
    helloWorld: void;
};
What this line does (high level).This line defines a TypeScript type that describes: The shape of the fixture object.
The types of values each fixture provides to a test
In this case:
There is one fixture named helloWorld
It provides no usable value to the test (void)
It exists only for setup and teardown
Meaning of each part
1. type MyFixtures = { ... }
This creates a TypeScript type alias
It does not exist at runtime
It is used purely by the TypeScript compiler for type checking
Think of it as a contract:
“These are the fixtures my test will receive, and these are their types.”
helloWorld: void;
This is the most important part.
What void means in TypeScript
void means:
“No value is returned”
“Nothing useful can be consumed”
Fixture type: void, string, number, object, class and custome types. */




/*
export const test = ...
Meaning
You are exporting a custom Playwright test function
This replaces the default test for your project

base.extend<MyFixtures>(...)
What base is? base is an alias for Playwright’s original test
It contains all built-in fixtures (page, browser, context, etc.)

What .extend<MyFixtures>() does
Creates a new test function
Adds custom fixtures defined by MyFixtures
Merges them with Playwright’s built-in fixtures
Uses MyFixtures purely for TypeScript typing


helloWorld: async ({}, use) => { ... }

This is the fixture implementation.

What use is
A callback provided by Playwright

Signals:
When the fixture is ready
When the test is allowed to run
When teardown can begin
await use();
This is the most important line.
What happens internally
Playwright runs the fixture
Execution reaches await use()
The test starts executing
The test finishes
Execution resumes after await use()
Teardown logic runs
This makes the fixture lifecycle: */






