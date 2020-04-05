const Item = require('../models/Item');
const Comment = require('../models/Comment');

module.exports.createComment = async (comment) => {
  const item = await Item.findByPk(comment.idItem);
  if (!item) {
    throw 'Item not found';
  }
  return Comment.create(comment);
};

module.exports.deleteComment = async (id, idPerson) => {
  const result = await Comment.findByPk(id);
  if (!result) {
    throw 'Comment is not found';
  }
  if (result.idPerson !== idPerson) {
    throw 'You can\'t delete this comment';
  }
  return Comment.destroy({ where: { id } });
};
