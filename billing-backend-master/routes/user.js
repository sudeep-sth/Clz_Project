import express from "express";
import { deleteUser, getAllUsers, getUserById, login, register, updateUser } from "../controllers/user.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.post('/login', login);
router.post('/register', verifyToken, register);
router.get('/all', verifyToken, getAllUsers);
router.get('/:id', verifyToken, getUserById);
router.patch('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);

export default router;