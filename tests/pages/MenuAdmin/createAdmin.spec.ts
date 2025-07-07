import { test, expect } from '@playwright/test';
import {createUser} from '../../testdata/logindata.json';
test.use({
  storageState: 'playwright\\.auth\\user.json'
});

test('Create Admin is already exist', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('form i').first().click();
  await page.getByRole('option', { name: 'ESS' }).click();
  await page.locator('form i').nth(1).click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('s');
  await page.getByRole('option', { name: 'Timothy Lewis Amiano' }).click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill(createUser.username);
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill(createUser.password);
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill(createUser.confirmPassword);
  await page.getByRole('button', { name: 'Save' }).click();
});