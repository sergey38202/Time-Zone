import express from "express";

import { createProduct, deleteProduct, getAllProducts, getProduct } from "../controllers/productController.js";
import authenticateUser from "../middlewares/authMiddleware.js";

const route = express.Router();

route.post('/create', authenticateUser, createProduct);
route.delete('/:id', authenticateUser, deleteProduct);
route.get('/products', getAllProducts);
route.get('/:id', getProduct);

export default route;