const { RESTDataSource } = require("apollo-datasource-rest");

class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000";
    this.respostaCustom = {
      code: 200,
      mensagem: "operação efetuada com sucesso",
    };
  }
  async getUsers() {
    const users = await this.get("/users");
    return users.map(async (user) => {
      return {
        id: user.id,
        nome: user.nome,
        email: user.email,
        ativo: user.ativo,
        role: await this.get(`/roles/${user.role}`),
      };
    });
  }
  async getUserById(id) {
    const user = await this.get(`/users/${id}`);
    user.role = await this.get(`/roles/${user.role}`);
    return user;
  }
  async adicionaUser(user) {
    const users = await this.get("users");
    user.id = users.length + 1;
    const role = await this.get(
      `roles?type=${String(user.role).toUpperCase()}`
    );
    await this.post("users", { ...user, role: role[0].id });
    this.respostaCustom.code = 201
    this.respostaCustom.mensagem = `Usuário de id ${users.length + 1} criado`
    return {
      ...this.respostaCustom,
      user: {
      ...user,
      role: role[0],
    }
    };
  }
  async atualizaUser(novosDados) {
    const role = await this.get(
      `roles?type=${String(novosDados.user.role).toUpperCase()}`
    );
    await this.put(`users/${novosDados.id}`, {
      ...novosDados.user,
      role: role[0].id,
    });
    this.respostaCustom.mensagem = `Usuário de id ${novosDados.id} atualizado`
    return {
      ...this.respostaCustom,
      user: {
        ...novosDados.user,
        role: role[0],
      },
    };
  }
  async deletaUser(id) {
    const user = await this.get(`users/${id}`);
    await this.delete(`users/${id}`);
    this.respostaCustom.mensagem = `Usuário de id ${user.id} deletado com sucesso`
    this.respostaCustom.code = 200
    return {
      ...this.respostaCustom,
      users: {
        ...user
      }
    };
  }
}

module.exports = UsersAPI;
