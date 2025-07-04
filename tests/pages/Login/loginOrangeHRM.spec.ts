import { test, expect } from '@playwright/test';
import loginData from '../../testdata/logindata.json';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'username' }).fill(loginData.validUser.username);
  await page.getByRole('textbox', { name: 'password' }).fill(loginData.validUser.password);
  await page.getByRole('button', { name: 'Login' }).click();

  // asertion for login successfull
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await expect(page).toHaveTitle('OrangeHRM');
});