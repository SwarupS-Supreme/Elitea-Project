import { Page } from '@playwright/test';
import { AppUrls } from '../constants/urls';
import { Header } from '../components/Header';

export class HomePage {
  readonly header: Header;

  constructor(private readonly page: Page) {
    this.header = new Header(page);
  }

  async open(): Promise<void> {
    await this.page.goto(AppUrls.home);
  }

  async navigateToClientWork(): Promise<void> {
    await this.header.openServicesMenu();
    await this.header.navigateToClientWork();
    await this.page.waitForURL(AppUrls.clientWorkPath);
  }
}
