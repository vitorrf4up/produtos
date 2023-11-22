const express = require("express");
const produtoController = require("../controllers/produtoController");
const router = express();

router.get('/produtos', async (req, res) => {
  produtoController.getProdutos(req, res)
});

router.get('/produtos/:id', async (req, res) => {
  produtoController.getProdutoById(req, res)
});

router.delete('/produtos/:id', async (req, res) => {
  produtoController.deleteProduto(req, res)
});

module.exports = router;