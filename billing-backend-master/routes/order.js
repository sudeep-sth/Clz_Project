import express from "express";
import { createOrder, deleteOrder, getAllOrders, getOrderById, updateOrder, getAllOrderReqests } from "../controllers/order.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.post('/create', createOrder);
router.get('/all', verifyToken, getAllOrders);
router.get('/allrequests', verifyToken, getAllOrderReqests);
router.get('/:id', verifyToken, getOrderById);
router.patch('/:id', verifyToken, updateOrder);
router.delete('/:id', verifyToken, deleteOrder);


export default router;