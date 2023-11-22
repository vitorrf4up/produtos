const Produto = require('../models/produto');

class UserService {
  async createProduto(name, category, listPrice) {
    return Produto.create({ name, category, listPrice });
  }

  async getProdutos() {
    return Produto.findAll();
  }

  async getProdutoById(id) {
    return Produto.findOne({ where: { id: id } });
  }

  async alterarProduto(id, produto) {
    return Produto.update(
      { name: produto.name, category: produto.category, listPrice: produto.listPrice},
      { where: { id: id}}
    );
  }
 
  async deletarProduto(id) {
    return Produto.destroy({
      where: {
        id: id
      }
    });
  }
}

module.exports = new UserService();
