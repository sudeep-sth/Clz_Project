//create a order schema containing product, quantity, customer name, orderApprovalStatus

import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    //product and quantity should be of array of objects
    orderdetails: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
        quantity: Number,
    }],
    customername: String,
    orderstatus: String,
});

const orderModel = mongoose.model('Order', orderSchema);
export default orderModel;