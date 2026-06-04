import { test, expect } from '@playwright/test';

test('Complete End-to-End Checkout Flow', async ({ page }) => {

  // Open the SauceDemo website
  await page.goto('https://www.saucedemo.com');

  // Enter username into the username field
  await page.getByPlaceholder('Username').fill('standard_user');

  // Enter password into the password field
  await page.getByPlaceholder('Password').fill('secret_sauce');

  // Click the Login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify that login was successful by checking URL
  await expect(page).toHaveURL(/inventory/);

  // Add first product to cart
  await page.locator('#add-to-cart-sauce-labs-backpack').click();

  // Add second product to cart
  await page.locator('#add-to-cart-sauce-labs-bike-light').click();

  // Verify cart badge shows 2 items
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

  // Open shopping cart
  await page.locator('.shopping_cart_link').click();

  // Verify first product exists in cart
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

  // Verify second product exists in cart
  await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();

  // Click Checkout button
  await page.getByRole('button', { name: 'Checkout' }).click();

  // Fill customer first name
  await page.getByPlaceholder('First Name').fill('Adeel');

  // Fill customer last name
  await page.getByPlaceholder('Last Name').fill('Yousfi');

  // Fill postal/zip code
  await page.getByPlaceholder('Zip/Postal Code').fill('75000');

  // Continue to order overview page
  await page.getByRole('button', { name: 'Continue' }).click();

  // Verify user reached checkout overview page
  await expect(page).toHaveURL(/checkout-step-two/);

  // Verify products are still present before purchase
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();

  // Click Finish button to place the order
  await page.getByRole('button', { name: 'Finish' }).click();

  // Verify order completion message appears
  await expect(
    page.getByText('Thank you for your order!')
  ).toBeVisible();

  // Verify successful checkout URL
  await expect(page).toHaveURL(/checkout-complete/);

});