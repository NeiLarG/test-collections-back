const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Person = sequelize.define('Person', {
  id: {
    field: 'ID',
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nickName: {
    field: 'NICKNAME',
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  birthDate: {
    field: 'BIRTH_DATE',
    type: DataTypes.DATE,
    allowNull: false,
  },
  idAccount: {
    field: 'ID_ACCOUNT',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idRole: {
    field: 'ID_ROLE',
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  idStatus: {
    field: 'ID_STATUS',
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'person',
  timestamps: false,
  classMethods: {
    associate: (models) => {
      Person.belongsTo(models.Collection, {
        foreignKey: 'ID_PERSON',
      });
      Person.hasOne(models.Account, {
        foreignKey: 'ID_ACCOUNT',
      });
      Person.hasOne(models.Role, {
        foreignKey: 'ID_ROLE',
      });
      Person.hasOne(models.Status, {
        foreignKey: 'ID_STATUS',
      });
    },
  },
});

module.exports = Person;
