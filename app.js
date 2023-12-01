// imports
const express = require('express');
const app = express();
const path = require('path');
const produtosRouter = require("./routers/produtosRouter");
const swagger = require("./docs/swagger");
require("dotenv").config();

// configuracao do express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// documentação do swagger
app.use(
  "/docs",
  swagger.serve,
  swagger.setup
);

// start 
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
  console.log(`Documentação na URL http://localhost:${PORT}/docs`)
});

// rotas
app.get("/", (req, res) => res.redirect("/docs"));
app.use(produtosRouter);

// 404
app.all("*", (req, res) => {
  res.status(404).json({"error": `${req.method} ${req.url} não é um endpoint válido`})
});

module.exports = app;