import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/product.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.post('/create', verifyToken, createProduct);
router.get('/all', getAllProducts);
router.get('/:id', verifyToken, getProductById);
router.patch('/:id', verifyToken, updateProduct);
router.delete('/:id', verifyToken, deleteProduct);

export default router;