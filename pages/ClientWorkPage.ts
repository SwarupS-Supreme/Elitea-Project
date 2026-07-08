import { Locator, Page } from '@playwright/test';
import { NavigationTestData } from '../fixtures/testData';

export class ClientWorkPage {
  readonly heading: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', {
      name: NavigationTestData.clientWorkHeading,
      exact: true,
    });
  }
}
