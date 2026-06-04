import { test, expect } from '@playwright/test';

test('Add item to cart and verify cart badge', async ({ page }) => {

  // Step 1: Open the website
  await page.goto('https://www.saucedemo.com');

  // Step 2: Login with valid credentials
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 3: Add a product to cart
  await page.locator('#add-to-cart-sauce-labs-backpack').click();

  // Step 4: Verify cart badge shows correct number (1 item added)
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

});