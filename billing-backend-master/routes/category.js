import express from "express";
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from "../controllers/category.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.post('/create', verifyToken, createCategory);
router.get('/all', verifyToken, getAllCategories);
router.get('/:id', verifyToken, getCategoryById);
router.patch('/:id', verifyToken, updateCategory);
router.delete('/:id', verifyToken, deleteCategory);

export default router;