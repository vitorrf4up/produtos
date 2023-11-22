// imports
const express = require('express'),
      app = express(),
      path = require('path'),
      produtosRouter = require("./routers/produtosRouter"), 
      swagger = require("./docs/swagger"),
      swaggerUi = require("swagger-ui-express");

// configuracao do express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// documentação do swagger
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swagger.specs)
);
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