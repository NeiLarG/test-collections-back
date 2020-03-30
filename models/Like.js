module.exports = (db, DataTypes) => {
  const Like = db.define('Like', {
    id: {
      field: 'ID',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    idPerson: {
      field: 'ID_PERSON',
      type: DataTypes.STRING,
      allowNull: true,
    },
    idItem: {
      field: 'ID_ITEM',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'like',
    timestamps: false,
    classMethods: {
      associate: (models) => {
        Like.belongsTo(models.Person, {
          foreignKey: 'ID_PERSON',
        });
        Like.hasOne(models.Item, {
          foreignKey: 'ID_ITEM',
        });
      },
    },
  });
  return Like;
};
