import "reflect-metadata";
import { DataSource } from "typeorm";
import { Club } from "./src/domain/entities/club.entity";
import { User } from "./src/domain/entities/user.entity";

export const AppDataSource = new DataSource({
  type: "postgres",

  host: "localhost",
  port: 5432,
  database: "clubes_ads_20242",
  username: "postgres",
  password: "postgres",

  synchronize: false,
  logging: true,
  entities: [User, Club], // pode ser com abaixo
  migrations: ["src/persistence/typeorm/migrations/**/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Datasource is UP!!!");
  })
  .catch((err) => {
    console.log("Erro ao inicilizar o DS!", err);
  });
