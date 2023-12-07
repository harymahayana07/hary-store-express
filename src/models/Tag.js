'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Product = require('./Product');
const ProductTag = require('./ProductTag');

class Tag extends Model {
  static associate(models) {
    // define association here
    Tag.belongsToMany(Product, {
      through: ProductTag,
      foreignKey: 'tag_id',
    });
  }
}
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tags',
  }
);
module.exports = Tag;