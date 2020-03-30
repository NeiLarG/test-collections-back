const express = require('express');

const controller = require('../controllers/like.controller');
const validation = require('../validations/like.validation');
const { isAuthenticated } = require('../config/passport');

const router = express.Router();

router.route('/')
  .post(isAuthenticated, validation.createLike, controller.createLike)
  .delete(isAuthenticated, validation.deleteLike, controller.deleteLike);

module.exports = router;
