const userResolvers = {
  Query: {
    users: (root, args, { dataSources }, info) => dataSources.usersApi.getUsers(),
    user: (root, {id}, {dataSources}) => dataSources.usersApi.getUserById(id)
  },
  Mutation: {
    adicionaUser: async (root, user, {dataSources}) =>  dataSources.usersApi.adicionaUser(user),
    atualizaUser: async (root, novosDados, {dataSources}) => dataSources.usersApi.atualizaUser(novosDados),
    deletaUser: async (root, {id}, {dataSources}) => dataSources.usersApi.deletaUser(id)
  }
};

module.exports = userResolvers;
