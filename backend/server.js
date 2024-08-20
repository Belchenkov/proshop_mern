import path from 'path';
import express from 'express';
import dotenv from 'dotenv';

import productRoutes from "./routes/productRoutes.js";

import connectDB                  from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 5555;

connectDB();

const app = express();

app.get('/', (req, res) => {
	res.send('API is running...');
});

// Routes
app.use('/api/products', productRoutes);

// Middleware
app.use(notFound);
app.use(errorHandler);
app.listen(port, () =>
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
