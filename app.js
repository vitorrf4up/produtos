var express = require('express');
var path = require('path');

const produtoController = require("./controllers/produtoController");

// express configuration
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// start 
app.listen(3000, () => console.log("Listening on port 3000"));

// rotas
app.get("/", () => res.send("API is working"));

app.get('/produtos', async (req, res) => {
  produtoController.getProdutos(req, res)
});

app.get('/produtos/:id', async (req, res) => {
  produtoController.getProdutoById(req, res)
});

app.post('/produtos', async (req, res) => {
  produtoController.createProduto(req, res)
});

app.put('/produtos/:id', async (req, res) => {
  produtoController.alterarProduto(req, res)
});

app.delete('/produtos/:id', async (req, res) => {
  produtoController.deletarProduto(req, res)
});

// 404
app.all("*", (req, res) => {
  res.send({"error": `Cannot ${req.method} ${req.url}`})
});

module.exports = app;