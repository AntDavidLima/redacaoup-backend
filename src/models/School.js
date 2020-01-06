const { Model, DataTypes } = require('sequelize');

class School extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
    }, {
      sequelize,
    });
  }
}

module.exports = School;
