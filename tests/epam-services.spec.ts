import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('EPAM Services navigation', () => {
  test('TC_1 - Client Work text is visible', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await homePage.openServicesMenu();
    await homePage.clickClientWork();

    await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
  });

  test('TC_2 - CONTACT US text is visible on Client Work page', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await homePage.openServicesMenu();
    await homePage.clickClientWork();

    await expect(page.getByText('CONTACT US', { exact: true })).toBeVisible();
  });

  test('TC_3 - Partners text is visible', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.open();
    await homePage.openServicesMenu();
    await homePage.clickPartners();

    await expect(page.getByText('Partners', { exact: true })).toBeVisible();
  });
});