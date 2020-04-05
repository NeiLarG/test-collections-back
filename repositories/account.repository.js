const Account = require('../models/Account');

module.exports.createAccount = async (account, options) => {
  const existingsAccountsCount = await Account.count({ where: { email: account.email } });
  if (existingsAccountsCount > 0) {
    throw 'Account with this email is already registered';
  }
  return Account.create(account, options);
};

module.exports.setPersonToAccount = async (idPerson, idAccount, options) => {
  options.where = { id: idAccount };
  return Account.update({ idPerson }, options);
};
