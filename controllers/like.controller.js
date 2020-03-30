const likeRepository = require('../repositories/like.repository');

module.exports.createLike = async (req, res) => {
  try {
    const like = await likeRepository.createLike(
      {
        idPerson: req.user.dataValues.id,
        idItem: req.body.idItem,
      },
    );

    res.status(200).json(like);
  } catch (error) {
    res.status(400).json({ errors: [error] });
  }
};

module.exports.deleteLike = async (req, res) => {
  try {
    const result = await likeRepository.deleteLike(
      {
        idPerson: req.user.dataValues.id,
        idItem: req.body.idItem,
      },
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ errors: [error] });
  }
};
