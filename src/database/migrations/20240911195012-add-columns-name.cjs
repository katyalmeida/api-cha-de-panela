"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("products", "name_user_second", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn("products", "name_user_third", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("products", "name_user_second");
    await queryInterface.removeColumn("products", "name_user_third");
  },
};
