import { MigrationInterface, QueryRunner } from "typeorm";

export class AddClubEntity1734035186934 implements MigrationInterface {
    name = 'AddClubEntity1734035186934'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "club" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "fu" character varying NOT NULL, "series" character varying NOT NULL, CONSTRAINT "PK_79282481e036a6e0b180afa38aa" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "club"`);
    }

}
