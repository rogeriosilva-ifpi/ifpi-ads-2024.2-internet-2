export interface SMSProvider {
  send(message: string): void;
}
