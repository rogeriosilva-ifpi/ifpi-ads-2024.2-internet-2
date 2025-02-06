// GraphQL Context
export interface MyGQLContext{
  user: string
}

// Executa a cada request
export const  initContext = async ({ req }) => {
  const user = req.user || "rogerio410";
  return { user }; 
}