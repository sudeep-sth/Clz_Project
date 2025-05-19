//create CRUD for category

import categoryModel from "../models/category.js";
import checkPermission from "../utils/checkPermission.js";

const createCategory = async (req, res) => {
    const { name, status } = req.body;

    if (!name || !status) return res.status(400).json({ msg: 'fields are required', success: false });

    try {
        const check = await checkPermission(req.userid, ["editor", "admin"]);
        if (!check) {
            return res.status(403).json({ msg: 'You are not authorized to perform this action' })
        }

        const checkIfCategoryNameAlreadyExists = await categoryModel.findOne({ name: name });

        if (checkIfCategoryNameAlreadyExists) return res.status(400).json({ msg: 'Category name already exists', success: false });
        await categoryModel.create(req.body);
        return res.status(200).json({ msg: 'Category created successfully', success: true });
    } catch (error) {
        return res.status(500).json({ msg: "internal server error", success: false });
    }
}

const getAllCategories = async (req, res) => {
    try {
        const check = await checkPermission(req.userid, ["editor", "admin"]);
        if (!check) {
            return res.status(403).json({ msg: 'You are not authorized to perform this action' })
        }
        const categories = await categoryModel.find({});

        return res.status(200).json({ categories, success: true });
    } catch (error) {
        return res.status(500).json({ msg: "internal server error", success: false });
    }
}

const getCategoryById = async (req, res) => {
    const id = req.params.id;

    try {
        const check = await checkPermission(req.userid, ["editor", "admin"]);
        if (!check) {
            return res.status(403).json({ msg: 'You are not authorized to perform this action' })
        }
        const category = await categoryModel.findById(id);
        return res.status(200).json({ category, success: true });
    } catch (error) {
        return res.status(500).json({ msg: "internal server error", success: false });
    }
}

const updateCategory = async (req, res) => {
    const id = req.params.id;
    try {
        const check = await checkPermission(req.userid, ["editor", "admin"]);
        if (!check) {
            return res.status(403).json({ msg: 'You are not authorized to perform this action' })
        }
        await categoryModel.findByIdAndUpdate(id, req.body);
        return res.status(200).json({ msg: 'Category updated successfully', success: true });
    } catch (error) {
        return res.status(500).json({ msg: "internal server error", success: false });
    }
}

const deleteCategory = async (req, res) => {
    const id = req.params.id;
    try {
        const check = await checkPermission(req.userid, ["editor", "admin"]);
        if (!check) {
            return res.status(403).json({ msg: 'You are not authorized to perform this action' })
        }
        await categoryModel.findByIdAndDelete(id);
        return res.status(200).json({ msg: 'Category deleted successfully' });
    } catch (error) {
        return res.status(500).json({ msg: "internal server error", success: false });
    }
}

export { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory };