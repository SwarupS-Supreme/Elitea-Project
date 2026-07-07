import { test, expect } from '@playwright/test';
import { EpamHomePage } from './pages/epamHomePage';

test.describe('EPAM Services navigation', () => {
  test('TC_1 - Client Work page shows Client Work text', async ({ page }) => {
    const homePage = new EpamHomePage(page);

    await homePage.open();
    await homePage.openServicesMenu();
    await homePage.openClientWork();

    await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
  });

  test('TC_2 - Client Work page shows CONTACT US text', async ({ page }) => {
    const homePage = new EpamHomePage(page);

    await homePage.open();
    await homePage.openServicesMenu();
    await homePage.openClientWork();

    await expect(page.getByText('CONTACT US', { exact: true })).toBeVisible();
  });

  test('TC_3 - Partners page shows Partners text', async ({ page }) => {
    const homePage = new EpamHomePage(page);

    await homePage.open();
    await homePage.openServicesMenu();
    await homePage.openPartners();

    await expect(page.getByRole('heading', { name: 'Partners' })).toBeVisible();
  });
});
