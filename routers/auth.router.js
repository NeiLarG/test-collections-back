const express = require('express');
const controller = require('../controllers/auth.controller');
const validation = require('../validations/auth.validation');

const router = express.Router();

router.route('/registration')
  .post(validation.registration, controller.registration);

router.route('/login')
  .post(validation.login, controller.login);

module.exports = router;
