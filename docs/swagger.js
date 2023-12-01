const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();
const PORT = process.env.PORT

class Swagger {
    options = {
      definition: {
        openapi: "3.1.0",
        info: {
          title: "Microserviços - Produtos",
          version: "1.0.0",
          description:
            "Aplicação CRUD que gerencia produtos"
        },
        servers: [
          {
            url: `http://localhost:${PORT}`
          },
        ],
      },
      apis: ["./docs/swagger.yaml"],
    };
    
    specs = swaggerJsdoc(this.options);
    serve = swaggerUi.serve;
    setup = swaggerUi.setup(this.specs);
}

module.exports = new Swagger();