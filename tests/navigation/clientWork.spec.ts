import { expect, test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ClientWorkPage } from '../../pages/ClientWorkPage';

test.describe('EPAM navigation from Services menu', () => {
  test('TC_1 - should display Client Work text', async ({ page }) => {
    const homePage = new HomePage(page);
    const targetPage = new ClientWorkPage(page);

    await homePage.open();
    await homePage.openServicesMenu();
    await homePage.goToClientWork();

    await expect(targetPage.clientWorkText).toBeVisible();
  });

  test('TC_2 - should display CONTACT US text', async ({ page }) => {
    const homePage = new HomePage(page);
    const targetPage = new ClientWorkPage(page);

    await homePage.open();
    await homePage.openServicesMenu();
    await homePage.goToClientWork();

    await expect(targetPage.contactUsText).toBeVisible();
  });

  test('TC_3 - should display Partners text', async ({ page }) => {
    const homePage = new HomePage(page);
    const targetPage = new ClientWorkPage(page);

    await homePage.open();
    await homePage.openServicesMenu();
    await homePage.goToPartners();

    await expect(targetPage.partnersText).toBeVisible();
  });
});
