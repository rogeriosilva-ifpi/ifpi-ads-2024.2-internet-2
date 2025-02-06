import { MyGQLContext } from "./context-graphql";
import { Montadora } from "./montadora.entity";

export const resolvers = {
  Query: {
    // montadoras: () => Montadora.find()
    montadoras: (_parent: any, _args: any, context: MyGQLContext, _info: any) => {
      console.log(`User: ${context.user}`)
      return Montadora.find()
    },
  },
};