const { ApolloServer } = require("apollo-server");
const userSchema = require("./user/schema/user.graphql");
const userResolvers = require("./user/resolvers/userResolvers");
const UsersAPI = require("./user/datasource/user");

const typeDefs = [userSchema];
const resolvers = [userResolvers];
const server = new ApolloServer({ typeDefs, resolvers, dataSources: () => {
  return {
    usersApi: new UsersAPI()
  }
} });

server.listen().then(({ url }) => {
  console.log(`Servidor rodando na url ${url}`);
});
