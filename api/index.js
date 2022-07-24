const { ApolloServer, gql } = require("apollo-server");

const users = [
  {
    nome: "Ana",
    ativo: true,
  },
  {
    nome: "Marcia",
    ativo: false,
  },
];

const typeDefs = gql`
  type Users {
    nome: String!,
    ativo: Boolean!,
    email: String
  }

`


const server = new ApolloServer({ typeDefs, resolvers });
