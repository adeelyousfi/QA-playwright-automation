import { test, expect } from '@playwright/test';

test('Login should fail with invalid password', async ({ page }) => {

  // Open login page
  await page.goto('https://www.saucedemo.com');

  // Enter valid username
  await page.getByPlaceholder('Username').fill('standard_user');

  // Enter WRONG password (this is intentional negative test)
  await page.getByPlaceholder('Password').fill('wrong_password');

  // Click login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Assert error message appears
  await expect(
    page.getByText('Username and password do not match')
  ).toBeVisible();

});