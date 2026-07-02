import { type Locator, type Page } from '@playwright/test';
import { NavigationTestData } from '../fixtures/testData.js';

export class Header {
  readonly servicesMenu: Locator;
  readonly exploreOurClientWorkLink: Locator;

  constructor(private readonly page: Page) {
    this.servicesMenu = this.page.getByRole('link', {
      name: NavigationTestData.servicesMenu,
    });

    this.exploreOurClientWorkLink = this.page.getByRole('link', {
      name: NavigationTestData.exploreOurClientWork,
    });
  }

  async openServicesMenu(): Promise<void> {
    await this.servicesMenu.hover();
  }

  async selectExploreOurClientWork(): Promise<void> {
    await this.exploreOurClientWorkLink.click();
  }
}
