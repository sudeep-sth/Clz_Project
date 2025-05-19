//create a category schema containing name and description and status
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: String,
    description: String,
    status: String
});

const categoryModel = mongoose.model('Category', categorySchema);
export default categoryModel;