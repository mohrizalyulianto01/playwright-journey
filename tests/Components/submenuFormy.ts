import { test} from '@playwright/test';
// install ts-node @type/node

export const submenuTest = () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://formy-project.herokuapp.com/')
    })
    
    test('Autocomplete', async ({ page }) => {
        await page.getByRole('link', { name: 'Autocomplete' }).click();
    });
    test('Buttons', async ({ page }) => {
        await page.getByRole('link', { name: 'Buttons' }).click();
    });
    test('Checkbox', async ({ page }) => {
        await page.getByRole('link', { name: 'Checkbox' }).click();
    });
    test('Datepicker', async ({ page }) => {
        await page.getByRole('link', { name: 'Date' }).click();
    });
}

// penggunaan tag untuk mengelompokkan test 
// cara menjalankan test dengan npx playwright test --grep=@allsubmenu