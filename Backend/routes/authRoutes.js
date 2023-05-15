import express from "express";
import { loginController, signupController, testController, userAuthController, adminAuthController, forgotPasswordController, getOrdersController, getOrderController, orderStatusController, updateProfileController } from "../controllers/authControllers.js";
import { isAdminMiddleware, requireLoginMiddleware } from "../middlewares/authMiddlewares.js";

const authRouter = express.Router();

//signup, login and forgot password
authRouter.post("/signup", signupController);
authRouter.post("/login", loginController);
authRouter.post("/forgot-password", forgotPasswordController);

//test route for middlewares
authRouter.get("/test", requireLoginMiddleware, isAdminMiddleware, testController);

//protected auth routes
authRouter.get("/user-auth", requireLoginMiddleware, userAuthController);
authRouter.get("/admin-auth", requireLoginMiddleware, isAdminMiddleware, adminAuthController);

//update profile
authRouter.patch("/profile", requireLoginMiddleware, updateProfileController);

//orders
authRouter.get("/orders", requireLoginMiddleware, getOrderController);

//all orders
authRouter.get("/all-orders", requireLoginMiddleware, isAdminMiddleware, getOrdersController);

// order status update
authRouter.patch(
  "/order-status/:orderId",
  requireLoginMiddleware,
  isAdminMiddleware,
  orderStatusController
);


export default authRouter;