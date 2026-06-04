import { test, expect } from '@playwright/test';

test.describe('Cart Module Test Suite', () => {

  // Runs before each test (optional but keeps code clean)
  test.beforeEach(async ({ page }) => {
    // Open website
    await page.goto('https://www.saucedemo.com');

    // Login (common step for all cart tests)
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
  });

  // 1. Add single item to cart
  test('Add single item to cart', async ({ page }) => {

    // Add one product to cart
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    // Verify cart badge shows 1 item
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  // 2. Add multiple items to cart
  test('Add multiple items to cart', async ({ page }) => {

    // Add two products
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#add-to-cart-sauce-labs-bike-light').click();

    // Verify cart badge shows 2 items
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
  });

  // 3. Remove item from cart
  test('Remove item from cart', async ({ page }) => {

    // Add item first
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    // Remove same item
    await page.locator('#remove-sauce-labs-backpack').click();

    // Verify cart is empty (badge disappears)
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
  });

  // 4. Verify item in cart page
  test('Verify item appears in cart page', async ({ page }) => {

    // Add product
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    // Open cart page
    await page.locator('.shopping_cart_link').click();

    // Verify product is visible in cart
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  });

  // 5. Cart badge disappears when empty (negative behavior)
  test('Cart badge disappears when empty', async ({ page }) => {

    // Add item
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    // Remove item
    await page.locator('#remove-sauce-labs-backpack').click();

    // Verify badge is gone
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
  });

});