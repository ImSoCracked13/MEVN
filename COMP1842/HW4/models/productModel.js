// Import the mongoose module
const mongoose = require('mongoose');

// Create a shortcut to the mongoose Schema constructor
const Schema = mongoose.Schema;

// Define a new schema for products
const productSchema = new Schema({
    // Define the name field, which is of type String and is required
    name: {
        type: String,
        required: "Product name cannot be empty",
        minLength: 5,
        maxLength: 20
    },
    // Define the price field, which is of type Number and is required
    price: {
        type: Number,
        required: "Price cannot be empty"
    },
    // Define the created_date field, which is of type Date and has a default value of the current date
    created_date: {
        type: Date,
        default: Date.now
    },
    // Define the status field, which is an array of strings with predefined values and a default value of 'pending'
    status: {
        type: [{
            type: String,
            enum: ['pending', 'on-hold', 'sold']
        }],
        default: ['pending']
    }
}, {
    versionKey: false // Place the versionKey option here
});

// Create a model from the schema, named 'Products'
const productModel = mongoose.model('Products', productSchema);

// Export the model so it can be used in other parts of the application
module.exports = productModel;
