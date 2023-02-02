const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product: {
        type: String,
        required: [true, 'name cannot be blank']
    },
    quantity: {
        type: Number,
    },
    category: {
        type: String,
    },
    bestBefore: {
        type: String,
    },
    upc: {
        type: String,
    },
    inStock: {
        type: Boolean,
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;