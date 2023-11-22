const express = require("express");
const produtoController = require("../controllers/produtoController");
const router = express();

// rotas
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
  produtoController.updateProduto(req, res)
});

router.delete('/produtos/:id', async (req, res) => {
  produtoController.deleteProduto(req, res)
});

module.exports = router;