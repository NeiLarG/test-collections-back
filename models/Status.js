const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Status = sequelize.define('Status', {
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
}, {
  tableName: 'status',
  timestamps: false,
});

module.exports = Status;
