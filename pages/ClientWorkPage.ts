import { expect, type Locator, type Page } from '@playwright/test';
import { TEST_DATA } from '../fixtures/testData.js';

export class ClientWorkPage {
  readonly heading: Locator;
  readonly contactUsText: Locator;
  readonly partnersText: Locator;

  constructor(private readonly page: Page) {
    this.heading = this.page.getByRole('heading', {
      name: TEST_DATA.CLIENT_WORK,
      exact: true,
    });
    this.contactUsText = this.page.getByText(TEST_DATA.CONTACT_US, {
      exact: true,
    });
    this.partnersText = this.page.getByText(TEST_DATA.PARTNERS, {
      exact: true,
    });
  }

  async expectHeadingVisible(): Promise<void> {
    await expect(this.heading).toBeVisible();
  }

  async expectContactUsVisible(): Promise<void> {
    await expect(this.contactUsText).toBeVisible();
  }

  async expectPartnersVisible(): Promise<void> {
    await expect(this.partnersText).toBeVisible();
  }
}
