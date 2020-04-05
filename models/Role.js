const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Role = sequelize.define('Role', {
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
  tableName: 'role',
  timestamps: false,
});

module.exports = Role;
