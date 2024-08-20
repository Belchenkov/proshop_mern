import { StatusCodes } from "http-status-codes";

import asyncHandler from "../middleware/asyncHandler.js";
import Product      from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({});

	return res
		.status(StatusCodes.OK)
		.json(products);
});

// @desc    Fetch product by id
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (!product) {
		res.status(StatusCodes.NOT_FOUND);
		throw new Error("Resource not found!");
	}

	return res
		.status(StatusCodes.OK)
		.json(product);
});

export {
	getProducts,
	getProductById,
};
