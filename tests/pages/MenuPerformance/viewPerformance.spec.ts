import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
  await expect(page.getByRole('heading', { name: 'Employee List' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add Employee' })).toBeVisible();
});
