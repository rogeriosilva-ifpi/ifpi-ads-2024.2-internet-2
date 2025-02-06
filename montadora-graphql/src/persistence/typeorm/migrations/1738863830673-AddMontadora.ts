import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMontadora1738863830673 implements MigrationInterface {
    name = 'AddMontadora1738863830673'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "montadora" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_e7744dd041333b398aa7cc3265e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "montadora"`);
    }

}
