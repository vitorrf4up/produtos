// imports
const express = require('express');
const app = express();
const path = require('path');
const produtosRouter = require("./routers/produtosRouter");

// configuracao do express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// start 
const PORT = 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

// rotas
app.get("/", (req, res) => res.json({message: "API está funcionando"}));
app.use(produtosRouter);

// 404
app.all("*", (req, res) => {
  res.status(404).json({"error": `${req.method} ${req.url} não é um endpoint válido`})
});

module.exports = app;