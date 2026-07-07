export class Logger {
  static info(message: string): void {
    // eslint-disable-next-line no-console
    console.log(`[INFO] ${message}`);
  }

  static error(message: string): void {
    // eslint-disable-next-line no-console
    console.error(`[ERROR] ${message}`);
  }
}
