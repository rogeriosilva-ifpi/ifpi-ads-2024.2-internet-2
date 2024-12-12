import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  constructor(name: string, email: string, password: string, phone: string) {
    // DDD
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
  }
}
