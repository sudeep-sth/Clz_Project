//create CR for order

import salesModel from "../models/sales.js";
import orderModel from "../models/order.js";

const createSales = async (req, res) => {
    const { order, paymentmethod, discount, gross, net, tax } = req.body;

    if (!order || !paymentmethod || !discount || !gross || !net || !tax) return res.status(400).json({ msg: 'fields are required', success: false });

    const newdate = new Date();
    const formattedToday = newdate.toISOString().split("T")[0];

    try {
        const orderdetails = await salesModel.create({ ...req.body, date: formattedToday });
        const populatedOrderDetails = await salesModel.findById(orderdetails._id).populate({
            path: 'order',
            populate: {
                path: 'orderdetails.product'
            }
        });
        await orderModel.findByIdAndUpdate(order, { orderstatus: "Paid" });
        // await orderModel.findByIdAndDelete(order);
        return res.status(200).json({ success: true, msg: 'Sales created successfully', order: populatedOrderDetails });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

const getAllSales = async (req, res) => {
    try {
        const sales = await salesModel.find({});
        return res.status(200).json({ success: true, sales });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}
const getAllSalesByDate = async (req, res) => {
    const date = req.params.date;
    try {
        const sales = await salesModel.find({ date: date }).populate({
            path: "order",
            populate: {
                path: "orderdetails.product"
            }
        });
        // const sales = await salesModel.find({});
        return res.status(200).json({ success: true, sales });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

const getSalesById = async (req, res) => {
    const id = req.params.id;
    try {
        const sales = await salesModel.findById(id);
        return res.status(200).json({ success: true, sales });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

// const getDailySales = async (req, res) => {
//     console.log("im here")
//     try {
//         // const salesReport = await Sales.aggregate([
//         //     {
//         //         $group: {
//         //             _id: '$date',
//         //             totalSalesAmount: { $sum: '$gross' },
//         //             totalOrders: { $sum: 1 }, // Count the number of orders
//         //             totalItemsSold: { $sum: { $size: '$orderdetails' } }, // Count total items sold
//         //             topSellingItem: {
//         //                 $first: '$orderdetails', // Get the first order detail (product and quantity)
//         //             },
//         //         },
//         //     },
//         //     {
//         //         $project: {
//         //             date: '$_id',
//         //             totalSalesAmount: 1,
//         //             totalOrders: 1,
//         //             totalItemsSold: 1,
//         //             topSellingItem: {
//         //                 product: '$topSellingItem.product',
//         //                 quantity: '$topSellingItem.quantity',
//         //             },
//         //             _id: 0,
//         //         },
//         //     },
//         // ]);

//         // const salesReport = await salesModel.aggregate([
//         //     {
//         //         $group: {
//         //             // _id: '$date',
//         //             totalSalesAmount: { $sum: '$net' },
//         //             mostSellingProduct: { $first: '$order.product' }, // Assuming you want the first product of the day
//         //         },
//         //     },
//         // ]);
//         console.log("om")
//         const salesdata = salesModel.find({})
//         let total = 0
//         let mostsellingproduct = salesdata[0].order[0].product
//         let mostSellingProductQuantity = salesdata[0].order[0].quantity
//         let totalorders = salesdata.length
//         let totalitemssold = 0
//         console.log("im here")
//         for (let i = 0; i < salesdata.length; i++) {
//             total += salesdata[i].net
//             if (salesdata[i].order[0].product > mostsellingproduct) {
//                 mostsellingproduct = salesdata[i].order[0].product
//                 mostSellingProductQuantity = salesdata[i].order[0].quantity
//             }
//             salesdata[i].order.forEach(element => {
//                 totalitemssold += element.quantity
//             });
//         }


//         res.json({
//             totalSalesAmount: total,
//             mostSellingProduct: mostsellingproduct,
//             mostSellingProductQuantity: mostSellingProductQuantity,
//             totalOrders: totalorders,
//             totalItemsSold: totalitemssold
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }


// }

const getDailySales = async (req, res) => {
    return res.status(200).json({ success: true, msg: "im here" });
}

export { createSales, getAllSales, getSalesById, getAllSalesByDate, getDailySales };