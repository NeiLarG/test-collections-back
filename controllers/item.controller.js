const itemRepository = require('../repositories/item.repository');

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
    const result = await itemRepository.getItemsByCollectionId(idCollection);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ errors: [error] });
  }
};
