const Like = require('../models/Like');

module.exports.createLike = async (like) => {
  const existingLikesCount = await Like.count({
    where: {
      idPerson: like.idPerson,
      idItem: like.idItem,
    },
  });
  if (existingLikesCount) {
    throw 'Like is already standing';
  }
  return Like.create(like);
};

module.exports.deleteLike = async (like) => {
  const existingLikesCount = await Like.count({
    where: {
      idPerson: like.idPerson,
      idItem: like.idItem,
    },
  });
  if (!existingLikesCount) {
    throw 'Like is not standing';
  }
  return Like.destroy({ where: like });
};
