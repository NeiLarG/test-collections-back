const Image = require('../models/Image');

module.exports.createImage = async (image) => Image.create(image);
