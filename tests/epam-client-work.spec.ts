import { expect, test } from '@playwright/test';
import { EpamHomePage } from '../pages/epam-home.page';

test.describe('EPAM Services navigation', () => {
  test('TC_1 - Client Work page shows Client Work text', async ({ page }) => {
    const epamHomePage = new EpamHomePage(page);

    await epamHomePage.goto();
    await epamHomePage.openClientWork();

    await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
  });

  test('TC_2 - Client Work page shows CONTACT US text', async ({ page }) => {
    const epamHomePage = new EpamHomePage(page);

    await epamHomePage.goto();
    await epamHomePage.openClientWork();

    await expect(page.getByText('CONTACT US', { exact: true })).toBeVisible();
  });

  test('TC_3 - Partners page shows Partners text', async ({ page }) => {
    const epamHomePage = new EpamHomePage(page);

    await epamHomePage.goto();
    await epamHomePage.openPartners();

    await expect(page.getByText('Partners', { exact: true })).toBeVisible();
  });
});
