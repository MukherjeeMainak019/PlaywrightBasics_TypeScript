import { test, expect } from '@playwright/test';

test('Intercept and log network calls', async ({ page }) => {

    // Intercept all network requests
    await page.route('**/*', async route => {
        const request = route.request();

        // Log basic request details
        console.log('Intercepted Request');
        console.log('URL:', request.url());
        console.log('Method:', request.method());
        console.log('Headers:', request.headers());
        console.log('Post Data:', request.postData());

        // Allow the request to continue
        await route.continue();
    });

    // Navigate to a site that makes API calls
    await page.goto('https://freelance-learn-automation.vercel.app');

});


test('Intercept only API calls', async ({ page }) => {

    await page.route('**/api/**', async route => {

        const request = route.request();

        console.log('API Intercepted');
        console.log('URL:', request.url());
        console.log('Method:', request.method());
        console.log('Headers:', request.headers());
        console.log('Post Data:', request.postData());

        await route.continue();
    });

    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.fill('#email1', 'abcxyz@gmail.com');
    await page.fill('#password1', 'abc1234');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(3000);

});

test('Intercept only API calls_Courses', async ({ page }) => {

    await page.route('**/api/courses', async route => {
        const request = route.request();

        console.log('API Intercepted');
        console.log('URL:', request.url());
        console.log('Method:', request.method());
        console.log('Headers:', request.headers());
        console.log('Post Data:', request.postData());

        await route.continue();
    });

    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.fill('#email1', 'abcxyz@gmail.com');
    await page.fill('#password1', 'abc1234');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(3000);

});

test('Intercept only API calls_Signin', async ({ page }) => {

    await page.route('**/api/signin', async route => {
        const request = route.request();

        console.log('API Intercepted');
        console.log('URL:', request.url());
        console.log('Method:', request.method());
        console.log('Headers:', request.headers());
        console.log('Post Data:', request.postData());

        await route.continue();
    });

    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.fill('#email1', 'abcxyz@gmail.com');
    await page.fill('#password1', 'abc1234');
    await page.getByRole('button', { name: 'Sign in' }).click();

});

test('Capture /api/courses response after login', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    // Trigger login
    await page.fill('#email1', 'abcxyz@gmail.com');
    await page.fill('#password1', 'abc1234');
    await page.getByRole('button', { name: 'Sign in' }).click();

    // Arm the listener BEFORE the action
    const coursesResponsePromise = page.waitForResponse(response =>
        response.url().includes('/api/courses') &&
        response.request().method() === 'GET'
    );

    // Await the response
    const coursesResponse = await coursesResponsePromise;

    console.log('Status:', coursesResponse.status());
    console.log('Headers:', coursesResponse.headers());

    const responseBody = await coursesResponse.json();
    console.log('Courses Response:', responseBody);
});

test('Validate course names from /api/courses response', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    await page.fill('#email1', 'abcxyz@gmail.com');
    await page.fill('#password1', 'abc1234');
    await page.getByRole('button', { name: 'Sign in' }).click();

    const coursesResponsePromise = page.waitForResponse(response =>
        response.url().includes('/api/courses') &&
        response.request().method() === 'GET'
    );



    const coursesResponse = await coursesResponsePromise;
    const courses = await coursesResponse.json();

    // Extract course names
    const courseNames = courses.map((course: any) => course.name);
    console.log('Course Names:', courseNames);

    // Assertions
    expect(courseNames).toContain('Java For Tester');
    expect(courseNames).toContain('Selenium For Web Automation');
});

