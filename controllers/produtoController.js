const produtoService = require('../services/produtoService');

class ProdutoController {
  async getProdutos(req, res) {
    try {
      const produtos = await produtoService.getProdutos();

      res.status(200).json(produtos);
    } catch (error) {
      console.error('Erro ao criar produto:', error);

      res.status(500).json({ error: 'Ocorreu um erro na aplicação.' });
    }
  }

  async getProdutoById(req, res) {
    try {
      const { id } = req.params;
      const produto = await produtoService.getProdutoById(id);

      if (!produto) {
        return res.status(404).json({error: "Produto não encontrado"});
      }

      res.status(200).json(produto);
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      res.status(500).json({ error: 'Ocorreu um erro na aplicação.' });
    }
  }

  async createProduto(req, res) {
    try {
      const { nome, categoria, precoSugerido } = req.body;

      const novoProduto = await produtoService.createProduto(nome, categoria, precoSugerido);

      res.status(201).json(novoProduto);
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      res.status(500).json({ error: 'Ocorreu um erro na aplicação.' });
    }
  }

  async updateProduto(req, res) {
    try {
      const produto = req.body;
  
      const produtoFoiAtualizado = await produtoService.updateProduto( produto);

      if (!produtoFoiAtualizado) {
        return res.status(404).json({error: "Produto não encontrado"});
      }

      return res.status(204).send();
    } catch(error) {
      console.error('Erro ao alterar produto:', error);
      res.status(500).json({ error: 'Ocorreu um erro na aplicação.' });
    }
  }

  async deleteProduto(req, res) {
    try {
      const { id } = req.params;
    
      const produtosDeletados = await produtoService.deleteProduto(id);
      if (produtosDeletados <= 0) {
        return res.status(404).json({error: "Produto não encontrado"});        
      }

      res.status(204).send();
    } catch(error) {
      console.error('Erro ao deletar produto:', error);
      res.status(500).json({ error: 'Ocorreu um erro na aplicação.' });
    }
  }
}

module.exports = new ProdutoController();
