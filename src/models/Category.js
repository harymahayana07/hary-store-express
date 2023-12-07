'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Product = require('./Product');

class Category extends Model {
  static associate(models) {
    Category.hasMany(Product, {
      foreignKey: 'category_id',
    });
  }
}
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'categories',
  }
);
module.exports = Category;
