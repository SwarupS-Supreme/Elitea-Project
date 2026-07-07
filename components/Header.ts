import { type Locator, type Page } from '@playwright/test';
import { TEST_DATA } from '../fixtures/testData.js';

export class Header {
  private readonly page: Page;
  readonly servicesMenu: Locator;
  readonly clientWorkLink: Locator;
  readonly partnersLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.servicesMenu = this.page.getByRole('button', {
      name: TEST_DATA.header.servicesMenuName,
    });
    this.clientWorkLink = this.page.getByRole('link', {
      name: TEST_DATA.header.clientWorkLinkName,
    });
    this.partnersLink = this.page.getByRole('link', {
      name: TEST_DATA.header.partnersLinkName,
    });
  }

  async openServicesMenu(): Promise<void> {
    await this.servicesMenu.click();
  }

  async navigateToClientWork(): Promise<void> {
    await this.clientWorkLink.click();
  }

  async navigateToPartners(): Promise<void> {
    await this.partnersLink.click();
  }
}
