import { type Page } from '@playwright/test';
import { BASE_URL } from '../constants/urls.js';
import { Header } from '../components/Header.js';
import { ClientWorkPage } from './ClientWorkPage.js';
import { PartnersPage } from './PartnersPage.js';

export class HomePage {
  private readonly page: Page;
  private readonly header: Header;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
  }

  async open(): Promise<void> {
    await this.page.goto(BASE_URL);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async openServicesMenu(): Promise<void> {
    await this.header.openServicesMenu();
  }

  async navigateToClientWork(): Promise<ClientWorkPage> {
    await this.openServicesMenu();
    await this.header.navigateToClientWork();
    await this.page.waitForLoadState('domcontentloaded');
    return new ClientWorkPage(this.page);
  }

  async navigateToPartners(): Promise<PartnersPage> {
    await this.openServicesMenu();
    await this.header.navigateToPartners();
    await this.page.waitForLoadState('domcontentloaded');
    return new PartnersPage(this.page);
  }
}
