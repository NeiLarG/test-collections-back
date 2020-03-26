const db = require('../models');

module.exports.createAccount = async (account, options) => {
  const existingsAccountsCount = await db.Account.count({ where: { email: account.email } });
  if (existingsAccountsCount > 0) {
    throw 'Account with this email is already registered';
  }
  return db.Account.create(account, options);
};
