const bcrypt = require('bcrypt-nodejs');


const instanceMethods = {
  hasSetPasswod: () => this.password != null && this.password.lenght > 0,
};

const beforeSaveHook = (account, options, fn) => {
  if (account.changed('password')) {
    const { password } = account;
    this.encryptPassword(password, (hash) => {
      // eslint-disable-next-line no-param-reassign
      account.password = hash;
      fn(null, account);
    });
    return;
  }
  fn(null, account);
};

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
    instanceMethods,
    classMethods: {
      associate: () => {
      },
      encryptPassword: (password, cb) => {
        if (!password) {
          cb('', null);
          return;
        }
        bcrypt.genSalt(10, (error, salt) => {
          if (error) {
            cb(null, error);
            return;
          }
          bcrypt.hash(password, salt, null, (hErr, hash) => {
            if (hErr) {
              cb(null, hErr);
              return;
            }
            cb(hash, null);
          });
        });
      },
      findUser: (email, password, callback) => {
        Account.findOne({
          where: { email },
        })
          .then((user) => {
            if (user == null || user.password == null || user.password.length === 0) {
              callback('User / Password combination is not correct', null);
              return;
            }
            bcrypt.compare(password, user.password, (err, res) => {
              if (res) callback(null, user);
              else callback('Wrong password', null);
            });
          })
          .catch((error) => {
            callback(error, null);
          });
      },
    },
    hooks: {
      beforeUpdate: beforeSaveHook,
      beforeCreate: beforeSaveHook,
    },

  });
  return Account;
};
