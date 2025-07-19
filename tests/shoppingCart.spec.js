const { test, expect } = require('@playwright/test');
const { ShoppingCartPage } = require('../testContext/ShoppingCartPage');

test('Shopping cart subtotal validation', async ({ page }) => {
  const cart = new ShoppingCartPage(page);
  await cart.navigate();
  await cart.selectSize('L');
  await cart.addProductToCart('Blue T-Shirt');
  await cart.checkout();
  const subtotal = await cart.getSubtotal();
  expect(subtotal.trim()).toBe('$9.00');
});
