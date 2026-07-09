import { test } from '@playwright/test';
import { EpamHomePage } from '../pages/epamHomePage';

test.describe('EPAM Services navigation', () => {
  test('TC_1 - Client Work page text is visible', async ({ page }) => {
    const epamHomePage = new EpamHomePage(page);

    await epamHomePage.open();
    await epamHomePage.openClientWork();
    await epamHomePage.expectTextVisible('Client Work');
  });

  test('TC_2 - Contact Us text is visible on Client Work page', async ({ page }) => {
    const epamHomePage = new EpamHomePage(page);

    await epamHomePage.open();
    await epamHomePage.openClientWork();
    await epamHomePage.expectTextVisible('CONTACT US');
  });

  test('TC_3 - Partners page text is visible', async ({ page }) => {
    const epamHomePage = new EpamHomePage(page);

    await epamHomePage.open();
    await epamHomePage.openPartners();
    await epamHomePage.expectTextVisible('Partners');
  });
});