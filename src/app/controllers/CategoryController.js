import * as Yup from "yup";
import Category from "../models/Category.js";

class CategoryController {
  async store(request, response) {
    const schema = Yup.object().shape({
      category: Yup.string().required(),
    });

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { category } = request.body;

    try {
      const CategoryExists = await Category.findOne({
        where: { category },
      });

      if (CategoryExists) {
        return response.status(400).json({ error: "Category already exists" });
      }

      await Category.create({ category });

      return response.status(200).json({ category });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }
  async index(request, response) {
    const categoryAll = await Category.findAll();

    return response.status(200).json(categoryAll);
  }
}

export default new CategoryController();
