import { test, expect } from '@playwright/test';


test('GET API example', async ({ request }) => {

  //firing a get request
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody);

  expect(responseBody.id).toBe(1);
  responseBody.title.includes('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
});


test('POST API example', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'Playwright API',
      body: 'API testing with Playwright',
      userId: 1
    }
  });

  expect(response.status()).toBe(201);

  const responseBody = await response.json();
  console.log(responseBody);

  expect(responseBody.title).toBe('Playwright API');
});


test('PUT API example', async ({ request }) => {
  const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    data: {
      id: 1,
      title: 'Updated Title',
      body: 'Updated body',
      userId: 1
    }
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.title).toBe('Updated Title');
});

test('DELETE API example', async ({ request }) => {
  const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.status()).toBe(200);
});

test('API with headers', async ({ request }) => {
  const response = await request.get('https://api.example.com/profile', {
    headers: {
      Authorization: 'Bearer YOUR_TOKEN',
      Accept: 'application/json'
    }
  });

  expect(response.ok()).toBeTruthy();
});




