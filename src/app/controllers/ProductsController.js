import * as Yup from "yup";
import Products from "../models/Products.js";
import Category from "../models/Category.js";

class ProductsController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name_product: Yup.string().required(),
      quantity: Yup.number().required(),
      category_id: Yup.number().required(),
    });

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (error) {
      return response.status(400).json({ error: error.errors });
    }

    try {
      const { filename: path } = request.file;
      const { name_product, quantity, category_id } = request.body;

      const products = await Products.create({
        name_product,
        quantity,
        path,
        category_id,
      });

      // if (!products) {
      //   return response.status(401).json({ error: "produto incorreto" });
      // }

      return response.json(products);
    } catch (error) {
      console.log(error);
    }
  }

  async index(request, response) {
    const productsAll = await Products.findAll({
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["id", "category"],
        },
      ],
      order: [["name_product", "ASC"]],
    });

    return response.status(200).json(productsAll);
  }

  async addName(request, response) {
    const { id } = request.params;
    const { name_user } = request.body;

    const product = await Products.findByPk(id);

    if (product.quantity === 1) {
      await Products.update(
        {
          name_user,
          quantity: product.quantity - 1,
          availability: true,
        },
        {
          where: { id },
        }
      );

      return response.status(200).json({ success: "Nome salvo com sucesso." });
    } else if (product.quantity === 2) {
      await Products.update(
        {
          name_user_second: name_user,
          quantity: product.quantity - 1,
        },
        {
          where: { id },
        }
      );

      return response.status(200).json({ success: "Nome salvo com sucesso." });
    } else {
      await Products.update(
        {
          name_user_third: name_user,
          quantity: product.quantity - 1,
        },
        {
          where: { id },
        }
      );

      return response.status(200).json({ success: "Nome salvo com sucesso." });
    }
  }
}

export default new ProductsController();
