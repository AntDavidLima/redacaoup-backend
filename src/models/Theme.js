const { Model, DataTypes } = require('sequelize');

class Theme extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      motivacional: DataTypes.ARRAY(DataTypes.TEXT),
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.School, { foreignKey: 'school_id', as: 'school' });
  }
}

module.exports = Theme;
