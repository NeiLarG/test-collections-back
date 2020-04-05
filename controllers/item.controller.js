const itemRepository = require('../repositories/item.repository');
const Like = require('../models/Like');
const Comment = require('../models/Comment');

module.exports.createItem = async (req, res) => {
  try {
    const item = await itemRepository.createItem(
      {
        name: req.body.name,
        idCollection: req.body.idCollection,
      },
    );

    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ errors: [error] });
  }
};

module.exports.getItemsByCollectionId = async (req, res) => {
  try {
    const { idCollection } = req.query;
    const result = await itemRepository.getItemsByCollectionId(idCollection, {
      where: { idCollection },
      include: [
        {
          model: Like,
          as: 'likes',
        },
        {
          model: Comment,
          as: 'comments',
        },
      ],
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ errors: [error] });
  }
};
