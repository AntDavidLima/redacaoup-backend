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

  static associate(models) {
    this.hasMany(models.Student, { foreignKey: 'school_id', as: 'students' });
    this.hasMany(models.Theme, { foreignKey: 'school_id', as: 'themes' });
    this.hasMany(models.Essay, { foreignKey: 'school_id', as: 'essays' });
  }
}

module.exports = School;
