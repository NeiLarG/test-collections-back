const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Item = sequelize.define('Item', {
  id: {
    field: 'ID',
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    field: 'NAME',
    type: DataTypes.STRING,
    allowNull: false,
  },
  idCollection: {
    field: 'ID_COLLECTION',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'item',
  timestamps: false,
  classMethods: {
    associate: (models) => {
      Item.hasOne(models.Collection, {
        foreignKey: 'ID_COLLECTION',
      });
    },
  },
});

module.exports = Item;
