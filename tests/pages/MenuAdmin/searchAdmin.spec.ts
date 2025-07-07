import { test, expect } from '@playwright/test';
import {createUser} from '../../testdata/logindata.json';

test.use({
  storageState: 'playwright\\.auth\\user.json'
});

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill(createUser.username);
  await page.locator('form i').first().click();
  await page.getByRole('option', { name: 'ESS' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill(createUser.username);
  await page.locator('form i').nth(1).click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
});