//create a product schema containing category, name, price and status
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    //categiry should be of categoryModel
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    name: String,
    price: Number,
    status: String,
    description: String,
});

const productModel = mongoose.model('Product', productSchema);
export default productModel;