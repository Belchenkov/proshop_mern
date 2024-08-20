import express from "express";
import { StatusCodes } from "http-status-codes";

import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const router = express.Router();

router.get('/',  asyncHandler(async (req, res) => {
	const products = await Product.find({});

	return res
		.status(StatusCodes.OK)
		.json(products);
}));

router.get('/:id', asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (!product) {
		res.status(StatusCodes.NOT_FOUND);
		throw new Error("Resource not found!");
	}

	return res
		.status(StatusCodes.OK)
		.json(product);
}));

export default router;
