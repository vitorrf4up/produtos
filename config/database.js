const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('loja', 'root', '***REMOVED***', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
