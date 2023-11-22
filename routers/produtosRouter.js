const express = require("express");
const produtoController = require("../controllers/produtoController");
const router = express();

// Rotas
router.get('/produtos', async (req, res) => {
  produtoController.getProdutos(req, res)
});

router.get('/produtos/:id', async (req, res) => {
  produtoController.getProdutoById(req, res)
});

router.post('/produtos', async (req, res) => {
  produtoController.createProduto(req, res)
});

router.put('/produtos/:id', async (req, res) => {
  produtoController.alterarProduto(req, res)
});

router.delete('/produtos/:id', async (req, res) => {
  produtoController.deletarProduto(req, res)
});

module.exports = router;