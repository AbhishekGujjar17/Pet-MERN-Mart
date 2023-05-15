import express from "express";
import { createCategoryController, deleteCategoryController, getCategoriesController, getCategoryController, updateCategoryController } from "../controllers/categoryControllers.js";
import { isAdminMiddleware, requireLoginMiddleware } from "../middlewares/authMiddlewares.js";

const categoryRouter = express.Router();

//CRUD Category

//create
categoryRouter.post("/create-category", requireLoginMiddleware, isAdminMiddleware, createCategoryController);

//read
categoryRouter.get("/get-categories", getCategoriesController);
categoryRouter.get("/get-category/:slug", getCategoryController);

//update
categoryRouter.patch("/update-category/:id", requireLoginMiddleware, isAdminMiddleware, updateCategoryController);

//delete
categoryRouter.delete("/delete-category/:id", requireLoginMiddleware, isAdminMiddleware, deleteCategoryController);


export default categoryRouter;