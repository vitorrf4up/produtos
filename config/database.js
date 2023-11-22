const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('loja', 'root', 'positivo', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
