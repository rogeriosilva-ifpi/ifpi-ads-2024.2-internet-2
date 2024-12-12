import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Club {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private name: string;

  @Column()
  private uf: string; // UF in Portuguese

  @Column()
  private series: string;

  constructor(name: string) {
    this.name = name;
  }
}
