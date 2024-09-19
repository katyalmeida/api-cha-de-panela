import { Sequelize } from "sequelize";
import Products from "../app/models/Products.js";
import configDataBase from "../config/database.cjs";
import Category from "../app/models/Category.js";

const models = [Products, Category];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.conection = new Sequelize(configDataBase.url);
    models
      .map((model) => model.init(this.conection))
      .map(
        (model) => model.associate && model.associate(this.conection.models)
      );
  }
}

export default new Database();
