import { type Locator, type Page, expect } from '@playwright/test';
import { TEST_DATA } from '../fixtures/testData.js';

export class ClientWorkPage {
  private readonly page: Page;
  readonly clientWorkHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.clientWorkHeading = this.page.getByRole('heading', {
      name: TEST_DATA.clientWorkPage.headingName,
      exact: true,
    });
  }

  async expectHeadingVisible(): Promise<void> {
    await expect(this.clientWorkHeading).toBeVisible();
  }
}
