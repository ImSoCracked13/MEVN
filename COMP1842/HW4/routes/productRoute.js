const router = (app) => {
    // Import the product controller
    const productController = require('../controllers/productController');

    // Define routes for products
    // Route type: without productId
    app.route('/products')
        .get(productController.view_all_products)
        .post(productController.create_new_product)
        .delete(productController.delete_all_products)

    // Route type: with productId
    app.route('/products/:productId')
        .get(productController.view_product_by_id)
        .put(productController.update_product)
        .delete(productController.delete_product_by_id)
};

// Export the router module
module.exports = router;