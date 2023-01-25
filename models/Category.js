const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
     id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,    
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }


  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
    }
price: {
  type: DataTypes.DECIMAL(10,2),
  allowNull: false,
  validate: {
    isDecimal: true
  }
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
      min: 0
    }

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        min: 0
      }

      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'category',
          key: 'id'
        }

        category_name: {
          type: DataTypes.STRING,
          references: {
            model: 'category',
            key: 'id'
          }
          category_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'category',
              key: 'id'
            }
            category_name: {
              type: DataTypes.STRING,
              references: {
                model: 'category',
                key: 'category_name'
              }

);



module.exports = Category;
