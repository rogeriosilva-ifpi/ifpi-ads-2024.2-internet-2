import "reflect-metadata";
import { DataSource } from "typeorm";
import { Montadora } from "./src/montadora.entity";

export const AppDataSource = new DataSource({
  type: "postgres",

  host: "localhost",
  port: 5432,
  database: "montadoras_ads_20242",
  username: "postgres",
  password: "postgres",

  synchronize: false,
  logging: true,
  entities: [Montadora], // pode ser como abaixo
  migrations: ["src/persistence/typeorm/migrations/**/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Datasource is UP!!!");
  })
  .catch((err) => {
    console.log("Erro ao inicilizar o DS!", err);
  });
