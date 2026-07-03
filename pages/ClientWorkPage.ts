import { Locator, Page } from '@playwright/test';
import { PageTexts } from '../constants/urls';

export class ClientWorkPage {
  readonly heading: Locator;

  constructor(private readonly page: Page) {
    this.heading = this.page.getByRole('heading', {
      name: PageTexts.clientWorkHeading,
      exact: true,
    });
  }
}
