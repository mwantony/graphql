const arrayUsers = [
  {
    nome: "Ana",
    ativo: true,
  },
  {
    nome: "Marcia",
    ativo: false,
  },
];
const userResolvers = {
  Query: {
    users: () => {
      return arrayUsers
    },
    primeiroUser: () => {
      return arrayUsers[0]
    }
  }
};

module.exports = userResolvers;
