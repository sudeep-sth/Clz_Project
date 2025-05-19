//create CRUD for order

import orderModel from "../models/order.js";

const createOrder = async (req, res) => {
    const { orderdetails, customername, orderstatus } = req.body;

    if (!orderdetails || !customername || !orderstatus) return res.status(400).json({ msg: 'fields are required' });

    try {
        await orderModel.create(req.body);
        return res.status(200).json({ success: true, msg: 'Order created successfully' });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

const getAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ orderstatus: { $in: ['Issued', 'Cooking', 'Completed'] } }).populate('orderdetails.product');
        return res.status(200).json({ success: true, orders });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

const getAllOrderReqests = async (req, res) => {
    try {
        const orders = await orderModel.find({ orderstatus: "requested" }).populate('orderdetails.product');
        return res.status(200).json({ success: true, orders });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

const getOrderById = async (req, res) => {
    const id = req.params.id;
    try {
        const order = await orderModel.findById(id);
        return res.status(200).json({ success: true, order });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

const updateOrder = async (req, res) => {
    const id = req.params.id;
    try {

        const findorder = await orderModel.findById(id);
        if (!findorder) return res.status(400).json({ success: false, msg: 'order not found' });

        if (findorder.orderstatus === "Completed") {
            return res.status(400).json({ success: false, msg: 'order is completed so can  not edit' })
        }

        await orderModel.findByIdAndUpdate(id, req.body);
        return res.status(200).json({ success: true, msg: 'Order updated successfully' });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

const deleteOrder = async (req, res) => {
    const id = req.params.id;
    try {

        const findorder = await orderModel.findById(id);
        if (!findorder) return res.status(400).json({ success: false, msg: 'order not found' });

        if (findorder.orderstatus === "Completed") {
            return res.status(400).json({ success: false, msg: 'order is completed so can  not delete' })
        }

        await orderModel.findByIdAndDelete(id);
        return res.status(200).json({ success: true, msg: 'Order deleted successfully' });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

export { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder, getAllOrderReqests };