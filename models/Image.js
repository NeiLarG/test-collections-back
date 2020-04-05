const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Image = sequelize.define('Image', {
  id: {
    field: 'ID',
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  link: {
    field: 'LINK',
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'image',
  timestamps: false,
});

module.exports = Image;
