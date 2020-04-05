const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Collection = sequelize.define('Collection', {
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
  description: {
    field: 'DESCRIPTION',
    type: DataTypes.STRING,
    allowNull: true,
  },
  idTopic: {
    field: 'ID_TOPIC',
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  idImage: {
    field: 'ID_IMAGE',
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  idPerson: {
    field: 'ID_PERSON',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'collection',
  timestamps: false,
  classMethods: {
    associate: (models) => {
      Collection.hasOne(models.Person, {
        foreignKey: 'ID_PERSON',
      });
      Collection.hasOne(models.Topic, {
        foreignKey: 'ID_TOPIC',
      });
      Collection.hasOne(models.Image, {
        foreignKey: 'ID_IMAGE',
      });
    },
  },
});

module.exports = Collection;
