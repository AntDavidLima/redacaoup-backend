module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('themes', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    motivacional: Sequelize.ARRAY(Sequelize.TEXT),
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    school_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'schools',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('themes'),
};
