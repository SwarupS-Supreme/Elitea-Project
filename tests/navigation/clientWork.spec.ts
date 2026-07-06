import { expect, test } from '@playwright/test';
import { ClientWorkPage } from '../../pages/ClientWorkPage.js';
import { HomePage } from '../../pages/HomePage.js';

test.describe('EPAM Services menu navigation', () => {
  test('TC_1: Client Work page heading is visible', async ({ page }) => {
    const homePage = new HomePage(page);
    const clientWorkPage = new ClientWorkPage(page);

    await homePage.open();
    await homePage.openServicesMenu();
    await homePage.navigateToClientWork();

    await expect(clientWorkPage.heading).toBeVisible();
  });

  test('TC_2: Client Work page contact us text is visible', async ({ page }) => {
    const homePage = new HomePage(page);
    const clientWorkPage = new ClientWorkPage(page);

    await homePage.open();
    await homePage.openServicesMenu();
    await homePage.navigateToClientWork();

    await expect(clientWorkPage.contactUsText).toBeVisible();
  });

  test('TC_3: Partners page heading is visible', async ({ page }) => {
    const homePage = new HomePage(page);
    const partnersPage = new ClientWorkPage(page);

    await homePage.open();
    await homePage.openServicesMenu();
    await homePage.navigateToPartners();

    await expect(partnersPage.heading).toBeVisible();
  });
});
