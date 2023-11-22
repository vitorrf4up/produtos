const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('loja', 'root', 'pa02sda9cj42', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
