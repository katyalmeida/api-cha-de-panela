"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Products", "name_user_second", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn("Products", "name_user_third", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("Products", "name_user_second");
    await queryInterface.removeColumn("Products", "name_user_third");
  },
};
