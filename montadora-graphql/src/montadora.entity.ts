import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Montadora extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: String
}