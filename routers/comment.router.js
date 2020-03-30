const express = require('express');

const controller = require('../controllers/comment.controller');
const validation = require('../validations/comment.validation');
const { isAuthenticated } = require('../config/passport');

const router = express.Router();

router.route('/')
  .post(isAuthenticated, validation.createComment, controller.createComment)
  .delete(isAuthenticated, validation.deleteComment, controller.deleteComment);

module.exports = router;
