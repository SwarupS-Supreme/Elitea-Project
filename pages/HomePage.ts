import { Page } from '@playwright/test';
import { AppUrls } from '../constants/urls';
import { Header } from '../components/Header';

export class HomePage {
  readonly header: Header;

  constructor(private readonly page: Page) {
    this.header = new Header(page);
  }

  async open(): Promise<void> {
    await this.page.goto(AppUrls.epamHome);
  }

  async openServicesMenu(): Promise<void> {
    await this.header.openServicesMenu();
  }

  async goToClientWork(): Promise<void> {
    await this.header.clickClientWorkLink();
  }

  async goToPartners(): Promise<void> {
    await this.header.clickPartnersLink();
  }
}
