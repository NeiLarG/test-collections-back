const express = require('express');

const authRouter = require('./auth.router');
const imageRoute = require('./image.router');
const collectionRoute = require('./collection.router');
const itemRoute = require('./item.router');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/image', imageRoute);
router.use('/collection', collectionRoute);
router.use('/item', itemRoute);


module.exports = router;
