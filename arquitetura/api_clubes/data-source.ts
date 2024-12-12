import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "clubes_ads20242",
  synchronize: false,
  logging: true,
  entities: ["src/domain/**/*.entity.ts"],
  migrations: ["src/persistence/typeorm/migrations/**/*.ts"],
});

// Inicializar a conexão
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
