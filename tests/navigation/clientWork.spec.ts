import { expect, test } from '@playwright/test';
import { ClientWorkPage } from '../../pages/ClientWorkPage.js';
import { HomePage } from '../../pages/HomePage.js';

test('navigate from Services menu to Client Work page', async ({ page }) => {
  const homePage = new HomePage(page);
  const clientWorkPage = new ClientWorkPage(page);

  await homePage.open();
  await homePage.openServicesMenu();
  await homePage.navigateToClientWork();

  await expect(clientWorkPage.heading).toBeVisible();
});
