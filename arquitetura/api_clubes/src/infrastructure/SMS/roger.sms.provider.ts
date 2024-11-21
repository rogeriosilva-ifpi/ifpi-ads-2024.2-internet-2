import { SMSProvider } from "../../application/providers/SMSProvider";

export class RogerSMSProvider implements SMSProvider {
  send(message: string): void {
    console.log(`Roger SMS: ${message}`);
  }
}
