const express = require('express');
const controller = require('../controllers/auth.controller');
const authValidation = require('../validations/auth.validation');

const router = express.Router();

router.post('/registration', authValidation.registration, controller.registration);

module.exports = router;
