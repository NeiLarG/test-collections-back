const express = require('express');

const authRouter = require('./auth.router');
const imageRouter = require('./image.router');
const collectionRouter = require('./collection.router');
const itemRouter = require('./item.router');
const likeRouter = require('./like.router');
const commentRouter = require('./comment.router');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/image', imageRouter);
router.use('/collection', collectionRouter);
router.use('/item', itemRouter);
router.use('/like', likeRouter);
router.use('/comment', commentRouter);

module.exports = router;
