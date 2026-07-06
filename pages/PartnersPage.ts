import { type Locator, type Page } from '@playwright/test';
import { PageTexts } from '../constants/urls.js';

export class PartnersPage {
  readonly heading: Locator;

  constructor(private readonly page: Page) {
    this.heading = this.page.getByRole('heading', {
      name: PageTexts.partnersHeading,
      exact: true,
    });
  }
}
