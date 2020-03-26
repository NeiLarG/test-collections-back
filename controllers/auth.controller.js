// const passport = require('passport');

const { sequelize } = require('../models');
const accountRepository = require('../repositories/account.repository');
const personRepository = require('../repositories/person.repository');

module.exports.registration = async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const account = await accountRepository.createAccount({
      email: req.body.email,
      password: req.body.password,
    }, { transaction: t });

    const person = await personRepository.createPerson({
      nickName: req.body.nickName,
      birthDate: req.body.birthDate,
      idAccount: account.dataValues.id,
      idStatus: 1,
      idRole: 1,
    }, { transaction: t });

    await t.commit();

    res.status(200).json({
      id: person.id,
      email: account.email,
      nickName: person.nickName,
      birthDate: person.birthDate,
      idAccount: person.idAccount,
      idStatus: person.idStatus,
      idRole: person.idRole,
    });
  } catch (error) {
    await t.rollback();
    res.status(400).json({ errors: [error] });
  }
};
