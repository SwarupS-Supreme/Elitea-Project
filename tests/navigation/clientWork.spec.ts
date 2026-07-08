import { expect, test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ClientWorkPage } from '../../pages/ClientWorkPage';

test('TC_1 - Verify Client Work page is visible', async ({ page }) => {
  const homePage = new HomePage(page);
  const clientWorkPage = new ClientWorkPage(page);

  await homePage.open();
  await homePage.navigateToClientWork();

  await expect(clientWorkPage.heading).toBeVisible();
});
