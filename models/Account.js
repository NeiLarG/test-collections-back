const bcrypt = require('bcryptjs');

module.exports = (db, DataTypes) => {
  const Account = db.define('Account', {
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
    instanceMethods: {
      validPassword(password) {
        return bcrypt.compareSync(password, this.password);
      },
    },
  });
  return Account;
};
