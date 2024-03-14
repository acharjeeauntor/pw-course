// @ts-check
const { test, expect } = require('@playwright/test');

// Test Timeout
test.setTimeout(40000)

test.only('has title', async ({ page,baseURL }) => {
  await page.goto(`${baseURL}`,{timeout:5000});

  await page.waitForTimeout(30000)
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/,{timeout:10000});
  await page.locator("sdsd").click({timeout:5000})
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
