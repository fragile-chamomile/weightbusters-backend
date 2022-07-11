const { Schema, model } = require("mongoose");

const productSchema = Schema({
    categories: {
        type: Array,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    title: {
        type: Object,
        required: true,
    },
    calories: {
        type: Number,
        required: true,
    },
    groupBloodNotAllowed: {
        type: Array,
        required: true,
    }
});

const Product = model("Product", productSchema);
