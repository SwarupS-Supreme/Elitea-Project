import { type Locator, type Page } from '@playwright/test';

export class PartnersPage {
  readonly heading: Locator;

  constructor(private readonly page: Page) {
    this.heading = this.page.getByRole('heading', {
      name: 'Partners',
      exact: true,
    });
  }
}
