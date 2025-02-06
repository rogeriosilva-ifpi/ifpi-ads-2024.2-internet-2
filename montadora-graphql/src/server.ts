// yarn add express cors reflect-metadata
// yarn add @apollo/server graphql
// yarn add @types/express -D
// yarn add typescript -D
// yarn add typescript -D
// yarn add ts-node-dev -D

// #### COMANDOS:
// yarn dev
// yarn typeorm migration:show
// yarn typeorm migration:generate src/persistence/typeorm/migrations/AddMontadora
// yarn typeorm migration:run

import 'reflect-metadata'
import express, { Express } from "express";
import cors from "cors";
import { json } from "body-parser";

import '../data-source'

// Servidor GraphQL
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

// Para carregar o schema de um arquivo .graphql
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";


import { routes } from "./routes";
import { resolvers } from './resolvers'
import { initContext, MyGQLContext } from "./context-graphql";


// Servidor Express
const app: Express = express();

app.use(cors());
app.use(json());


app.use(routes);


const typeDefs = loadSchemaSync("src/schema.graphql", {
  loaders: [new GraphQLFileLoader()],
});


async function startApolloServer() {
  const apolloServer = new ApolloServer<MyGQLContext>({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();

  // Middleware do Apollo Server no Express, com contexto assíncrono
  app.use(
    "/graphql",
    expressMiddleware(apolloServer, {
      context: initContext,
    })
  );

  // Iniciando o servidor
  app.listen(4000, () => {
    console.log("🚀 Servidor rodando em http://localhost:4000");
    console.log("📌 GraphQL Playground: http://localhost:4000/graphql");
  });
}

// Iniciar Apollo Server
startApolloServer().catch((err) => console.error("Erro ao iniciar o servidor:", err));
