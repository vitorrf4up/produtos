const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  listPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Product.sync(); // Sincroniza o modelo com o banco de dados

module.exports = Product;
