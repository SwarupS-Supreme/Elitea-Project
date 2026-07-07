import { expect, test } from '@playwright/test';

test.describe('EPAM services navigation', () => {
  test('TC_1 - Client Work page should show Client Work text', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /services/i }).click();
    await page.getByRole('link', { name: /client work/i }).click();

    await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
  });

  test('TC_2 - Client Work page should show CONTACT US text', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /services/i }).click();
    await page.getByRole('link', { name: /client work/i }).click();

    await expect(page.getByText('CONTACT US', { exact: true })).toBeVisible();
  });

  test('TC_3 - Partners page should show Partners text', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /services/i }).click();
    await page.getByRole('link', { name: /partners/i }).click();

    await expect(page.getByText('Partners', { exact: true })).toBeVisible();
  });
});
