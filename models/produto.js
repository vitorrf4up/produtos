const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
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
  }}, 
  { timestamps: false });

Produto.sync(); // Sincroniza o modelo com o banco de dados

module.exports = Produto;
