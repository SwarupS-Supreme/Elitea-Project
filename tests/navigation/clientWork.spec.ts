import { test } from '@playwright/test';
import { ClientWorkPage } from '../../pages/ClientWorkPage.js';
import { HomePage } from '../../pages/HomePage.js';

test.describe('EPAM Services menu navigation', () => {
  test('TC_1 - Services → Client Work → verify Client Work', async ({ page }) => {
    const homePage = new HomePage(page);
    const clientWorkPage = new ClientWorkPage(page);

    await homePage.open();
    await homePage.navigateToClientWork();
    await clientWorkPage.expectHeadingVisible();
  });

  test('TC_2 - Services → Client Work → verify CONTACT US', async ({ page }) => {
    const homePage = new HomePage(page);
    const clientWorkPage = new ClientWorkPage(page);

    await homePage.open();
    await homePage.navigateToClientWork();
    await clientWorkPage.expectContactUsVisible();
  });

  test('TC_3 - Services → Partners → verify Partners', async ({ page }) => {
    const homePage = new HomePage(page);
    const clientWorkPage = new ClientWorkPage(page);

    await homePage.open();
    await homePage.navigateToPartners();
    await clientWorkPage.expectPartnersVisible();
  });
});
