interface StartMatchRequest {
  // DTO (InputPort)
  user: string;
  casa_id: number;
  visitante_id: number;
}

export class StartMatchCommand {
  public execute(request: StartMatchRequest) {}
}
