const collectionRepository = require('../repositories/collection.repository');
const Person = require('../models/Person');
const Image = require('../models/Image');
const Topic = require('../models/Topic');

module.exports.getAllCollections = async (req, res) => {
  try {
    const collections = await collectionRepository.getAllCollections({
      include: [
        {
          model: Person,
          as: 'person',
        },
        {
          model: Image,
          as: 'image',
        },
        {
          model: Topic,
          as: 'topic',
        },
      ],
    });
    res.status(200).json(collections);
  } catch (error) {
    console.log(error);
    res.status(400).json({ errors: [error] });
  }
};

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

module.exports.deleteCollection = async (req, res) => {
  try {
    const { idCollection } = req.body;
    const result = await collectionRepository.deleteCollection(
      idCollection,
      req.user.dataValues.id,
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ errors: [error] });
  }
};
