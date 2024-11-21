import { container } from "tsyringe";
import { SMSProvider } from "../../application/providers/SMSProvider";
import { RogerSMSProvider } from "../../infrastructure/SMS/roger.sms.provider";

container.registerSingleton<SMSProvider>("SMSProvider", RogerSMSProvider);
