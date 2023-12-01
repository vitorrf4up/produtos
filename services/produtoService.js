const Produto = require('../models/produto');
const getFornecedor = require("./fornecedorService");

class UserService {
  async getProdutos() {
    const produtos = await Produto.findAll();

    for (let produto of produtos) {
      const idFornecedor = produto.fornecedorId || 0;

      produto.fornecedor = await getFornecedor(idFornecedor);
    }

    return produtos;
  }

  async getProdutoById(id) {
    const produto = await Produto.findOne({ where: { id: id } });

    if (!produto) {
      return null;
    }

    produto.fornecedor = await getFornecedor(produto.fornecedorId);

    return produto;
  }

  async createProduto(nome, categoria, precoSugerido, fornecedorId) {
    let fornecedor = await getFornecedor(fornecedorId);
    if (fornecedor)
      fornecedor = JSON.stringify(fornecedor);

    return Produto.create({nome, categoria, precoSugerido, fornecedorId, fornecedor});
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
