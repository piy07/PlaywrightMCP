const { test, expect } = require('@playwright/test');
const Ajv = require('ajv');
const ajv = new Ajv();

const productSchema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    title: { type: 'string' },
    price: { type: 'number' },
    rating: {
      type: 'object',
      properties: {
        rate: { type: 'number' },
        count: { type: 'number' }
      },
      required: ['rate', 'count']
    }
  },
  required: ['id', 'title', 'price', 'rating']
};

test('Get single product API test', async ({ request }) => {
  // Define the API endpoint
  const endpoint = 'https://fakestoreapi.com/products/1';

  // Send GET request to the endpoint
  const response = await request.get(endpoint);
  
  // Verify response status is 200
  expect(response.status()).toBe(200);
  
  // Parse response body
  const responseBody = await response.json();
  
  // Validate required keys exist
  expect(responseBody).toHaveProperty('id');
  expect(responseBody).toHaveProperty('title');
  expect(responseBody).toHaveProperty('price');
  expect(responseBody).toHaveProperty('rating');
  
  // Validate schema using Ajv
  const validate = ajv.compile(productSchema);
  const isValid = validate(responseBody);
  
  if (!isValid) {
    console.error('Schema validation errors:', validate.errors);
  }
  expect(isValid).toBeTruthy();
  
  // Log product title and price
  console.log(`Product Title: ${responseBody.title}`);
  console.log(`Product Price: $${responseBody.price}`);
});
