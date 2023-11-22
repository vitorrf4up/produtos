const produtoService = require('../services/produtoService');

class ProdutoController {
  async createProduto(req, res) {
    const { name, category, listPrice } = req.body;

    try {
      const novoProduto = await produtoService.createProduto(name, category, listPrice);

      res.status(201).json(novoProduto);
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      res.status(500).json({ error: 'Ocorreu um erro na aplicação.' });
    }
  }

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
    const { id } = req.params;

    try {
      const produto = await produtoService.getProdutoById(id);

      if (!produto) 
        return res.status(404).json({error: "Produto não encontrado"});

      res.status(200).json(produto);
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      res.status(500).json({ error: 'Ocorreu um erro na aplicação.' });
    }
  }

  async alterarProduto(req, res) {
    try {
      const { id } = req.params;
  
      const produto = req.body;
  
      produtoService.alterarProduto(id, produto);

      return res.status(204).send();
    } catch(error) {
      console.error('Erro ao alterar produto:', error);
      res.status(500).json({ error: 'Ocorreu um erro na aplicação.' });
    }
  }

  async deletarProduto(req, res) {
    try {
      const { id } = req.params;
    
      const deletado = await produtoService.deletarProduto(id);
      if (deletado <= 0) {
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