import express from 'express';
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from './config/db.js';
import authRouter from "./routes/authRoutes.js";
import categoryRouter from './routes/categoryRoutes.js';
import productRouter from './routes/productRoutes.js';

//api object
const app = express();

//confiuration for environment variables
dotenv.config();

//middlewares
app.use(cors());
app.use(express.json()); //allow json in req/res
app.use(morgan('dev'));


//database connection
connectDB();

//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", productRouter);

//api endpoint
app.get("/", (req, res) => {
  res.json("Pet MERN-Mart Project");
});

//PORT Number
const PORT = process.env.PORT;

//making server listen
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT} in ${process.env.ENVIRONMENT} Environment`);
})

