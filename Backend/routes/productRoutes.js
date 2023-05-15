import express from "express";
import { deleteProductController, productFiltersController, updateProductController, getProductsController, getProductController, createProductController, productCategoryController, productCountController, productListController, productPhotoController, relatedProductsController, searchProductController, braintreeTokenController, brainTreePaymentController } from "../controllers/productControllers.js";
import { isAdminMiddleware, requireLoginMiddleware } from "../middlewares/authMiddlewares.js";
import formidable from "express-formidable";

const productRouter = express.Router();

//CRUD product

//create
productRouter.post("/create-product", requireLoginMiddleware, isAdminMiddleware, formidable(), createProductController);

//read
productRouter.get("/get-products", getProductsController);
productRouter.get("/get-product/:slug", getProductController);

//update
productRouter.patch("/update-product/:pid", requireLoginMiddleware, isAdminMiddleware, formidable(), updateProductController);

//delete
productRouter.delete("/delete-product/:pid", requireLoginMiddleware, isAdminMiddleware, deleteProductController);

//get photo
productRouter.get("/product-photo/:pid", productPhotoController);

//filter product
productRouter.post("/product-filters", productFiltersController);

//product count
productRouter.get("/product-count", productCountController);

//product per page
productRouter.get("/product-list/:page", productListController);

//search product
productRouter.get("/search/:keyword", searchProductController);

//similar product
productRouter.get("/related-products/:pid/:cid", relatedProductsController);

//category wise product
productRouter.get("/product-category/:slug", productCategoryController);

//payment routes

//token
productRouter.get("/braintree/token", braintreeTokenController);
//payments
productRouter.post("/braintree/payment", requireLoginMiddleware, brainTreePaymentController);

export default productRouter;