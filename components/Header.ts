import { Locator, Page } from '@playwright/test';
import { NavigationTestData } from '../fixtures/testData';

export class Header {
  readonly servicesMenuLink: Locator;
  readonly clientWorkLink: Locator;

  constructor(private readonly page: Page) {
    this.servicesMenuLink = page.getByRole('link', {
      name: NavigationTestData.servicesMenu,
      exact: true,
    });

    this.clientWorkLink = page.getByRole('link', {
      name: NavigationTestData.clientWorkLink,
      exact: true,
    });
  }

  async openServicesMenu(): Promise<void> {
    await this.servicesMenuLink.hover();
  }

  async navigateToClientWork(): Promise<void> {
    await this.clientWorkLink.click();
  }
}
