const userResolvers = {
  Query: {
    users: (root, args, { dataSources }, info) => dataSources.usersApi.getUsers(),
    user: (root, {id}, {dataSources}) => dataSources.usersApi.getUserById(id)
  },
  Mutation: {
    adicionaUser: (root, user, {dataSources}) =>  dataSources.usersApi.adicionaUser(user)
  }
};

module.exports = userResolvers;
