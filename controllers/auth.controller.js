const passport = require('passport');
const jwt = require('jsonwebtoken');

const sequelize = require('../config/sequelize');
const accountRepository = require('../repositories/account.repository');
const personRepository = require('../repositories/person.repository');

module.exports.registration = async (req, res) => {
  console.log(sequelize);
  const t = await sequelize.transaction();

  try {
    let account = await accountRepository.createAccount({
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

    account = await accountRepository.setPersonToAccount(
      person.dataValues.id,
      account.dataValues.id,
      { transaction: t },
    );

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

module.exports.login = async (req, res) => {
  try {
    await passport.authenticate('local', (err, account) => {
      if (err) {
        res.status(400).json({ errors: [err] });
      }
      if (!account) {
        throw 'Invalid email or password';
      } else {
        const payload = {
          id: account.idPerson,
          email: account.email,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        res.status(200).json({ account, token });
      }
    })(req, res);
  } catch (error) {
    res.status(400).json({ errors: [error] });
  }
};
