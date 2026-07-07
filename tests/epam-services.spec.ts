import { test } from '@playwright/test';
import { EpamHomePage } from '../pages/epam-home.page';

test.describe('EPAM Services navigation', () => {
  test('TC_1 - Client Work text should be visible', async ({ page }) => {
    const epamHome = new EpamHomePage(page);

    await epamHome.open();
    await epamHome.openServicesMenu();
    await epamHome.clickClientWork();
    await epamHome.verifyVisibleText('Client Work');
  });

  test('TC_2 - CONTACT US text should be visible', async ({ page }) => {
    const epamHome = new EpamHomePage(page);

    await epamHome.open();
    await epamHome.openServicesMenu();
    await epamHome.clickClientWork();
    await epamHome.verifyVisibleText('CONTACT US');
  });

  test('TC_3 - Partners text should be visible', async ({ page }) => {
    const epamHome = new EpamHomePage(page);

    await epamHome.open();
    await epamHome.openServicesMenu();
    await epamHome.clickPartners();
    await epamHome.verifyVisibleText('Partners');
  });
});