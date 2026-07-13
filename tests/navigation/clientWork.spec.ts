import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ClientWorkPage } from '../../pages/ClientWorkPage';

test.describe('EPAM Services navigation', () => {
  test('TC_1: verify Client Work text is visible', async ({ page }) => {
    const homePage = new HomePage(page);
    const destinationPage = new ClientWorkPage(page);

    await homePage.goto();
    await homePage.header.openServicesLink('Client Work');

    await destinationPage.expectClientWorkVisible();
  });

  test('TC_2: verify CONTACT US text is visible', async ({ page }) => {
    const homePage = new HomePage(page);
    const destinationPage = new ClientWorkPage(page);

    await homePage.goto();
    await homePage.header.openServicesLink('Client Work');

    await destinationPage.expectContactUsVisible();
  });

  test('TC_3: verify Partners text is visible', async ({ page }) => {
    const homePage = new HomePage(page);
    const destinationPage = new ClientWorkPage(page);

    await homePage.goto();
    await homePage.header.openServicesLink('Partners');

    await destinationPage.expectPartnersVisible();
  });
});
