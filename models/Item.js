module.exports = (db, DataTypes) => {
  const Item = db.define('Item', {
    id: {
      field: 'ID',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      field: 'NAME',
      type: DataTypes.STRING,
      allowNull: false,
    },
    idCollection: {
      field: 'ID_COLLECTION',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'item',
    timestamps: false,
    classMethods: {
      associate: (models) => {
        Item.hasOne(models.Collection, {
          foreignKey: 'ID_COLLECTION',
        });
      },
    },
  });
  return Item;
};
