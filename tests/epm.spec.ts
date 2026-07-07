import { test, expect } from '@playwright/test';

test.describe('EPAM Services navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Services' }).hover();
  });

  test('TC_1 - Client Work page shows Client Work text', async ({ page }) => {
    await page.getByRole('link', { name: 'Client Work' }).click();
    await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
  });

  test('TC_2 - Client Work page shows CONTACT US text', async ({ page }) => {
    await page.getByRole('link', { name: 'Client Work' }).click();
    await expect(page.getByText('CONTACT US', { exact: true })).toBeVisible();
  });

  test('TC_3 - Partners page shows Partners text', async ({ page }) => {
    await page.getByRole('link', { name: 'Partners' }).click();
    await expect(page.getByRole('heading', { name: 'Partners' })).toBeVisible();
  });
});
