import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { ulid } from 'ulid'

// Schema
const typeDefs = /* GraphQL */ `
  type Book {
    id: String
    title: String! # not null
    author: String!
    year: Int!
  }

  input BookInput {
    title: String!
    author: String!
    year: Int!
  }

  input PageInput {
    page: Int!
  }

  type Query {
    books(input: PageInput): [Book]
    futureBooks: [Book]
  }

  type Mutation {
    createBook(input: BookInput!): Book
  }
`


// Resolvers
const resolvers = {
    Query: {
        books: (_, args) => {
            const {input:pageInput} = args
            // console.log(`Page: ${pageInput.page}`)
            return books
        },
        futureBooks: () => books.filter(book => book.year > 2024)
    },
    Mutation: {
        createBook: (parent, args) => {
            const { input:book } = args
            const new_book = {...book, id: ulid()}
            books.push(new_book)
            return new_book
        }
    }
}

// Mock Data
type Book = {id: String, title: String, author: String, year: number}

const books: Book[] = [
    {
        id: ulid(),
        title: 'Essencialismo',
        author: 'Greg Mckeown',
        year: 2020,
    },
    {
        id: ulid(),
        title: 'Diário de Anne Frank',
        author: 'Anne Frank',
        year: 1944
    }
]


// Server: recebe schema e resolvers
const server = new ApolloServer({
    typeDefs,
    resolvers
})

// Criar um Express Server com Middleware GQL
startStandaloneServer(server, {
    listen: {
        port: 3000,
        path: '/graphql'
    },
}).then(
    ({url}) => console.log(`Server start at: ${url}graphql`)
)

