export class Logger {
  static info(message: string): string {
    return `[INFO] ${message}`;
  }

  static error(message: string): string {
    return `[ERROR] ${message}`;
  }
}
