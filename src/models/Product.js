// models/Product.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const ProductTag = require('./ProductTag');
const Category = require('./Category');
const Tag = require('./Tag');

class Product extends Model {
  static associate(models) {
    // Define associations here
    Product.belongsTo(Category, {
      foreignKey: 'category_id',
      onDelete: 'CASCADE',
    });
    Product.belongsToMany(Tag, {
      through: ProductTag,
      foreignKey: 'product_id',
    });
  }
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'products',
  }
);

module.exports = Product;
