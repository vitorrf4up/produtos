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

  async updateProduto(produto) {
    const produtoDb = await this.getProdutoById(produto.id);

    if (!produtoDb) {
      return false;
    }

    await Produto.update(
        produto,
        { where: { id: produto.id } }
    );

    return true;
  }


  async deleteProduto(id) {
    return Produto.destroy({
      where: { id: id }
    });
  }
}

module.exports = new UserService();
