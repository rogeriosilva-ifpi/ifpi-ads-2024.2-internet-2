import { inject, injectable } from "tsyringe";
import { SMSProvider } from "../providers/SMSProvider";

interface StartMatchRequest {
  // DTO (InputPort)
  user: string;
  casa_id: number;
  visitante_id: number;
}

@injectable()
export class StartMatchCommand {
  constructor(
    @inject("SMSProvider")
    private smsProvider: SMSProvider
  ) {}

  public execute(request: StartMatchRequest) {
    console.log("Match Started!!!");
    this.smsProvider.send("Match Started!!!");
  }
}
