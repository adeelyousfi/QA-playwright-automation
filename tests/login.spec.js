import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/loginPage');  // ← ADD THIS LINE

// ===== YOUR EXISTING TEST (KEEP IT) =====
test('Final Day 1 - SauceDemo login flow', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');

});

// ===== NEW TEST USING POM (ADD THIS AT BOTTOM) =====
test('POM version - SauceDemo login flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');
});