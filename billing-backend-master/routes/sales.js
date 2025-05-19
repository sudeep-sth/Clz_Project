import express from "express";
import { createSales, getAllSales, getSalesById, getAllSalesByDate, getDailySales } from "../controllers/sales.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.post('/create', verifyToken, createSales);
router.get('/all', verifyToken, getAllSales);
router.get('/:id', verifyToken, getSalesById);
router.get('/date/:date', verifyToken, getAllSalesByDate);
// router.get("/daily", verifyToken, (req, res)=>{
//     console.log("im here")
//     res.send("okay")
// })


export default router;