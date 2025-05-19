//create a sales schema containing product, quantity, payment method, payment status, customer name

import mongoose from 'mongoose';

const salesSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    paymentmethod: String,
    discount: Number,
    tax: Number,
    gross: Number,
    net: Number,
    date: String,
}, { timestamps: true });

const salesModel = mongoose.model('Sales', salesSchema);
export default salesModel;