import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPhoneColumnOnUser1734034743713 implements MigrationInterface {
    name = 'AddPhoneColumnOnUser1734034743713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "phone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phone"`);
    }

}
