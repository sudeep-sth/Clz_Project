//create CRUD for product

import categoryModel from "../models/category.js";
import productModel from "../models/product.js";
import checkPermission from "../utils/checkPermission.js";

const createProduct = async (req, res) => {
    const { name, price, category, status } = req.body;

    if (!name || !price || !category || !status) return res.status(400).json({ success: false, msg: 'fields are required' });

    try {
        const checkCategory = await categoryModel.findById(category);
        if (!checkCategory) return res.status(400).json({ success: false, msg: 'category not found' });

        const check = await checkPermission(req.userid, ["editor", "admin"]);

        if (!check) return res.status(403).json({ success: false, msg: 'unauthorized' });

        const checkIfProductAlreadyExists = await productModel.findOne({ name: name });
        if (checkIfProductAlreadyExists) return res.status(400).json({ success: false, msg: 'Product already exists' });

        await productModel.create(req.body);
        return res.status(200).json({ success: true, msg: 'Product created successfully' });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

const getAllProducts = async (req, res) => {
    try {
        // const check = await checkPermission(req.userid, ["editor", "admin"]);

        // if (!check) return res.status(403).json({ success: false, msg: 'unauthorized' });

        const products = await productModel.find({}).populate('category');
        return res.status(200).json({ success: true, products });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

const getProductById = async (req, res) => {
    const id = req.params.id;

    try {
        const check = await checkPermission(req.userid, ["editor", "admin"]);

        if (!check) return res.status(403).json({ success: false, msg: 'unauthorized' });
        const product = await productModel.findById(id).populate('category');
        return res.status(200).json({ success: true, product });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

const updateProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const check = await checkPermission(req.userid, ["editor", "admin"]);

        if (!check) return res.status(403).json({ success: false, msg: 'unauthorized' });
        await productModel.findByIdAndUpdate(id, req.body);
        return res.status(200).json({ success: true, msg: 'Product updated successfully' });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const check = await checkPermission(req.userid, ["editor", "admin"]);

        if (!check) return res.status(403).json({ success: false, msg: 'unauthorized' });
        await productModel.findByIdAndDelete(id);
        return res.status(200).json({ success: true, msg: 'Product deleted successfully' });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "internal server error" });
    }
}

export { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };