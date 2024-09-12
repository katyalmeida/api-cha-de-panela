import Sequelize, { Model } from "sequelize";

class Products extends Model {
  static init(sequelize) {
    super.init(
      {
        name_product: Sequelize.STRING,
        name_user: Sequelize.STRING,
        name_user_second: Sequelize.STRING,
        name_user_third: Sequelize.STRING,
        path: Sequelize.STRING,
        availability: Sequelize.BOOLEAN,
        quantity: Sequelize.INTEGER,
        category_id: Sequelize.INTEGER,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3001/products-file/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: "category_id",
      as: "category",
    });
  }
}

export default Products;
