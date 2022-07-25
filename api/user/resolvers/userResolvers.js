const {GraphQLScalarType} = require('graphql')

const userResolvers = {
  RolesType: {
    ESTUDANTE: "ESTUDANTE",
    DOCENTE: "DOCENTE",
    COORDENACAO: "COORDENACAO"
  }, 
  DateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "string de data e hora no formato USO-8601",
    serialize: (value) => value.toISOString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value)
  }),
  Query: {
    users: (root, args, { dataSources }, info) => dataSources.usersApi.getUsers(),
    user: (root, {id}, {dataSources}) => dataSources.usersApi.getUserById(id)
  },
  Mutation: {
    adicionaUser: async (root, {user}, {dataSources}) => dataSources.usersApi.adicionaUser(user),
    atualizaUser: async (root, novosDados, {dataSources}) => dataSources.usersApi.atualizaUser(novosDados),
    deletaUser: async (root, {id}, {dataSources}) => dataSources.usersApi.deletaUser(id)
  }
};

module.exports = userResolvers;
