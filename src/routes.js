import { Router } from "express";

import ProductsController from "./app/controllers/ProductsController.js";
import CategoryController from "./app/controllers/CategoryController.js";
import multer from "multer";
import multerConfig from "./config/multer.js";
const upload = multer(multerConfig);
const routes = new Router();

routes.get("/products", ProductsController.index);
routes.post("/products", upload.single("file"), ProductsController.store);
routes.post("/products/:id", ProductsController.addName);

routes.get("/category", CategoryController.index);
routes.post("/category", CategoryController.store);

export default routes;
