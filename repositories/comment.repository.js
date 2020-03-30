const db = require('../models');

module.exports.createComment = async (comment) => {
  const item = await db.Item.findByPk(comment.idItem);
  if (!item) {
    throw 'Item not found';
  }
  return db.Comment.create(comment);
};

module.exports.deleteComment = async (id, idPerson) => {
  const result = await db.Comment.findByPk(id);
  if (!result) {
    throw 'Comment is not found';
  }
  if (result.idPerson !== idPerson) {
    throw 'You can\'t delete this comment';
  }
  return db.Comment.destroy({ where: { id } });
};
