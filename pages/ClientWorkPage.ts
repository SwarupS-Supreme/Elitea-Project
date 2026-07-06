import { type Locator, type Page } from '@playwright/test';
import { PageTexts } from '../constants/urls.js';

export class ClientWorkPage {
  readonly heading: Locator;
  readonly contactUsText: Locator;

  constructor(private readonly page: Page) {
    this.heading = this.page.getByRole('heading', {
      name: PageTexts.clientWorkHeading,
      exact: true,
    });
    this.contactUsText = this.page.getByText(PageTexts.contactUsText, {
      exact: true,
    });
  }
}
