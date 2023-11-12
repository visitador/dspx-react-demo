import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home Page/);
});

test('tutorial link', async ({ page }) => {
  await page.goto('/');

  // Expects page to have a heading with the name of Congratulations.
  await expect(page.getByRole('heading', { name: /Congratulations/ })).toBeVisible();

  // Click the Tutorial link.
  await page.getByRole('link', { name: 'Tutorial' }).click();
});
