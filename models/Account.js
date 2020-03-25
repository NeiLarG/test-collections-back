const bcrypt = require('bcrypt-nodejs');

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
  }, {
    tableName: 'account',
    timestamps: false,
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
