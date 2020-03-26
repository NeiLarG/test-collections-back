// const passport = require('passport');
const { check, validationResult } = require('express-validator');

const { sequelize } = require('../models');
const accountRepository = require('../repositories/account.repository');
const personRepository = require('../repositories/person.repository');

module.exports.registration = async (req, res) => {
  await check('email')
    .isEmail()
    .withMessage('Email incorrect')
    .run(req);
  await check('nickName')
    .isLength({ min: 4 })
    .withMessage('Min length 4')
    .run(req);
  await check('password')
    .isLength({ min: 6 })
    .withMessage('Min length 6')
    .run(req);
  await check('confirmPassword')
    .equals(req.body.password)
    .withMessage('Passwords are not equally')
    .run(req);
  await check('birthDate')
    .isISO8601()
    .toDate()
    .withMessage('Check date format "yyyy-mm-dd"')
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

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
