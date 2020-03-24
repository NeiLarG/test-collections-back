module.exports = (db, DataTypes) => {
  const Person = db.define('Person', {
    id: {
      field: 'ID',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nickName: {
      field: 'NICKNAME',
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      field: 'BIRTH_DATE',
      type: DataTypes.DATE,
      allowNull: false,
    },
    idAccount: {
      field: 'ID_ACCOUNT',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idRole: {
      field: 'ID_ROLE',
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idStatus: {
      field: 'ID_STATUS',
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    tableName: 'person',
    classMethods: {
      associate: (models) => {
        Person.hasOne(models.Account, {
          foreignKey: 'ID_ACCOUNT',
        });
        Person.hasOne(models.Role, {
          foreignKey: 'ID_ROLE',
        });
        Person.hasOne(models.Status, {
          foreignKey: 'ID_STATUS',
        });
      },
    },
  });
  return Person;
};
