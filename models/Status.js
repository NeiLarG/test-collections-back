module.exports = (db, DataTypes) => {
  const Status = db.define('Status', {
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
  }, {
    tableName: 'status',
    timestamps: false,
  });
  return Status;
};
