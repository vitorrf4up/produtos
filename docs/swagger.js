const swaggerJsdoc = require("swagger-jsdoc");

class Swagger {
    options = {
      definition: {
        openapi: "3.1.0",
        info: {
          title: "Microserviços - Produtos",
          version: "0.1.0",
          description:
            "Aplicação CRUD que gerencia produtos"
        },
        servers: [
          {
            url: "http://localhost:3000",
          },
        ],
      },
      apis: ["./routers/*.js"],
    };
    
    specs = swaggerJsdoc(this.options);
}

module.exports = new Swagger();