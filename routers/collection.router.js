const express = require('express');

const controller = require('../controllers/collection.controller');
const validation = require('../validations/collection.validation');
const { isAuthenticated } = require('../config/passport');

const router = express.Router();

router.route('/')
  .get(isAuthenticated, validation.getCollections, controller.getCollections)
  .post(isAuthenticated, validation.createCollection, controller.createCollection);

module.exports = router;
