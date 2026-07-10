import { Locator, Page } from '@playwright/test';
import { NavigationData } from '../fixtures/testData';

export class Header {
  private readonly servicesTrigger: Locator;
  private readonly clientWorkLink: Locator;
  private readonly partnersLink: Locator;

  constructor(private readonly page: Page) {
    this.servicesTrigger = page
      .getByRole('button', { name: NavigationData.servicesMenu })
      .or(page.getByRole('link', { name: NavigationData.servicesMenu }));

    this.clientWorkLink = page.getByRole('link', { name: NavigationData.clientWorkLink });
    this.partnersLink = page.getByRole('link', { name: NavigationData.partnersLink });
  }

  async openServicesMenu(): Promise<void> {
    await this.servicesTrigger.hover();
  }

  async clickClientWorkLink(): Promise<void> {
    await this.clientWorkLink.click();
  }

  async clickPartnersLink(): Promise<void> {
    await this.partnersLink.click();
  }
}
