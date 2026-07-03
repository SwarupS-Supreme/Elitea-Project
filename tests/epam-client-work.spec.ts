import { test } from '@playwright/test';
import { EpamHomePage } from '../pages/epam-home.page.js';

test.describe('EPAM client work navigation', () => {
  test('should navigate from Services to Client Work and display Client Work text', async ({ page }) => {
    const epamHomePage = new EpamHomePage(page);

    await epamHomePage.open();
    await epamHomePage.openClientWorkFromServices();
    await epamHomePage.verifyClientWorkVisible();
  });
});
