import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost", // Altere conforme necessário
  port: 5432, // Porta padrão do PostgreSQL
  username: "postgres", // Substitua pelo usuário do banco de dados
  password: "postgres", // Substitua pela senha do banco de dados
  database: "clubes_ads20242", // Substitua pelo nome do banco de dados
  synchronize: false, // Use false para produção (mantenha consistência com migrações)
  logging: true, // Define se você deseja ver logs de queries
  entities: ["src/domain/**/*.entity.ts"], // Caminho para as entidades
  migrations: ["src/persistence/typeorm/migrations/**/*.ts"], // Caminho para as migrações
});

// Inicializar a conexão
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
