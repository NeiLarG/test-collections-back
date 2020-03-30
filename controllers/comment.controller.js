const commentRepository = require('../repositories/comment.repository');

module.exports.createComment = async (req, res) => {
  try {
    const comment = await commentRepository.createComment(
      {
        idPerson: req.user.dataValues.id,
        idItem: req.body.idItem,
        text: req.body.text,
        date: new Date(),
      },
    );

    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ errors: [error] });
  }
};

module.exports.deleteComment = async (req, res) => {
  try {
    const result = await commentRepository.deleteComment(req.body.id, req.user.dataValues.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ errors: [error] });
  }
};
