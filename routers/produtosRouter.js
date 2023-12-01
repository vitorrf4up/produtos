const express = require("express");
const produtoController = require("../controllers/produtoController");
const router = express();

router.get('/produtos', async (req, res) => {
  await produtoController.getProdutos(req, res)
});

router.get('/produtos/:id', async (req, res) => {
  await produtoController.getProdutoById(req, res)
});

router.post('/produtos', async (req, res) => {
  await produtoController.createProduto(req, res)
});

router.put('/produtos', async (req, res) => {
  await produtoController.updateProduto(req, res)
});

router.delete('/produtos/:id', async (req, res) => {
  await produtoController.deleteProduto(req, res)
});

module.exports = router;