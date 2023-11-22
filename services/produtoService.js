const Produto = require('../models/produto');

class UserService {
  async getProdutos() {
    return Produto.findAll();
  }

  async getProdutoById(id) {
    return Produto.findOne({ where: { id: id } });
  }

  async createProduto(nome, categoria, precoSugerido) {
    return Produto.create({ nome, categoria, precoSugerido });
  }

  async updateProduto(id, produto) {
    return Produto.update(
      produto,
      { where: { id: id}}
    );
  }
 
  async deleteProduto(id) {
    return Produto.destroy({
      where: { id: id }
    });
  }
}

module.exports = new UserService();
