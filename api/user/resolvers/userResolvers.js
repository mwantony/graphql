
const userResolvers = {
  Query: {
    users: (root, args, {dataSources}) => {
      return dataSources.usersAPI.getUsers()
    }
  }
};

module.exports = userResolvers;
