import express from "express";
import cors from "cors";
import routes from "./routes.js";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import "./database/index.js";

const corsConfig = {
  origin: "https://chadepanelalists.netlify.app",
  credentials: true,
};
class App {
  constructor() {
    this.app = express();
    this.app.use(cors(corsConfig));
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(
      "/products-file",
      express.static(resolve(__dirname, "..", "uploads"))
    );
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
