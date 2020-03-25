const db = require('../models');

module.exports.createAccount = async (account) => {
  const existingsAccountsCount = await db.Account.count({ where: { email: account.email } });
  if (existingsAccountsCount > 0) {
    throw 'Account with this email is already registered';
  }
  const dbAccount = db.Account.build(account);
  return dbAccount.save();
};
