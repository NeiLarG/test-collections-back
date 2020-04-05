const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Topic = sequelize.define('Topic', {
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
  tableName: 'topic',
  timestamps: false,
});

module.exports = Topic;
