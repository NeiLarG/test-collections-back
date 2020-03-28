const collectionRepository = require('../repositories/collection.repository');

module.exports.createCollection = async (req, res) => {
  try {
    const collection = await collectionRepository.createCollection(
      {
        name: req.body.name,
        description: req.body.description,
        idTopic: req.body.idTopic,
        idImage: req.body.idImage,
        idPerson: req.body.idPerson,
      },
    );

    res.status(200).json(collection);
  } catch (error) {
    res.status(400).json({ errors: [error] });
  }
};

module.exports.getCollectionsByPersonId = async (req, res) => {
  try {
    const { idPerson } = req.query;
    const result = await collectionRepository.getCollectionsByPersonId(idPerson);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ errors: [error] });
  }
};
