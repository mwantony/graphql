const userResolvers = {
  Query: {
    users: (root, args, { dataSources }, info) => dataSources.usersApi.getUsers(),
    user: (root, {id}, {dataSources}) => dataSources.usersApi.getUserById(id)
  },
};

module.exports = userResolvers;
