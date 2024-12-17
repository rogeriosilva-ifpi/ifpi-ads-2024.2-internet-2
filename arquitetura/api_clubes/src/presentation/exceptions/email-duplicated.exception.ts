import { HTTPException } from "./http-exception";

export class EmailDuplicatedException extends HTTPException {
  constructor() {
    super(400, "Email duplicado <exclamacao>");
  }
}
