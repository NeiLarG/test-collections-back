const bcrypt = require('bcryptjs');
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Account = sequelize.define('Account', {
  id: {
    field: 'ID',
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    field: 'EMAIL',
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    isEmail: true,
  },
  password: {
    field: 'PASSWORD',
    type: DataTypes.STRING,
    allowNull: false,
  },
  idPerson: {
    field: 'ID_PERSON',
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'account',
  timestamps: false,
  classMethods: {
    associate: (models) => {
      Account.hasOne(models.Person, {
        foreignKey: 'ID_PERSON',
      });
    },
  },
  hooks: {
    beforeCreate: (account) => {
      const salt = bcrypt.genSaltSync();
      account.password = bcrypt.hashSync(account.password, salt);
    },
  },
});

module.exports = Account;
