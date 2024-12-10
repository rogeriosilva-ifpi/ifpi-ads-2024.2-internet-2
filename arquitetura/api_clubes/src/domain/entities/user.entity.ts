export class User {
  id: number;
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    // DDD
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
