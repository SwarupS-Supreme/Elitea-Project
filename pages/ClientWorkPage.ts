import { Locator, Page } from '@playwright/test';
import { NavigationData } from '../fixtures/testData';

export class ClientWorkPage {
  readonly clientWorkText: Locator;
  readonly contactUsText: Locator;
  readonly partnersText: Locator;

  constructor(private readonly page: Page) {
    this.clientWorkText = page.getByText(NavigationData.expectedClientWorkText, { exact: true });
    this.contactUsText = page.getByText(NavigationData.expectedContactUsText, { exact: true });
    this.partnersText = page.getByText(NavigationData.expectedPartnersText, { exact: true });
  }
}
