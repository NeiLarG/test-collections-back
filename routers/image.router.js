const express = require('express');
const Multer = require('multer');

const { isAuthenticated } = require('../config/passport');

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

const controller = require('../controllers/image.controller');

const router = express.Router();

router.route('/upload')
  .post(isAuthenticated, multer.single('picture'), controller.uploadImage);

module.exports = router;
