const productModel = require('../models/productModel');
const Product = require('../models/productModel');

// View all products
exports.view_all_products = async (req, res) => {
    try {
        products = await Product.find();
        res.json(products);
    } catch (err) {
        res.send(err)
    }
};

// View all products
exports.view_product_by_id = async (req, res) => {
    try {
        id = req.params.productId
        product = await productModel.findById(id)
        res.json(product)
    } catch (err) {
        res.send(err)
    }
};

// Create a new product
exports.create_new_product = async (req, res) => {
    try {
        new_product = req.body
        await productModel.create(new_product)
        res.json({ "message": "Create new product succeed!" })
    } catch (err) {
        res.send(err)
    }
};

// Update a product
exports.update_product = async (req, res) => {
    try {
        id = req.params.productId
        changed_product = req.body
        await productModel.findByIdAndUpdate(id, changed_product)
        res.json({ "message": "Update a product succeed!" })
    } catch (err) {
        res.send(err)
    }
};

// Delete a product
exports.delete_all_products = async (req, res) => {
    try {
        await productModel.deleteMany()
        res.send("Delete all products succeed!")
    } catch (err) {
        res.send(err)
    }
};

// Delete a product by ID
exports.delete_product_by_id = async (req, res) => {
    try {
        id = req.params.productId
        await productModel.findByIdAndDelete(id)
        res.send("Delete a product succeed!")
    } catch (error) {
        res.send(err)
    }
};