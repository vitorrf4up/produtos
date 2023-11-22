const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precoSugerido: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Product.sync(); // Sincroniza o modelo com o banco de dados

module.exports = Product;
