import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
});

// untuk memberikan perintah codegen menggunakan token pakai tambahkan --load-storage kemudian nama file auth.json
// contoh: npx playwright codegen --load-storage=playwright/.auth/user.json https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index 