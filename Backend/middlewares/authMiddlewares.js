import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireLoginMiddleware = async (req, res, next) => {

  try {
    const decode = JWT.verify(req.headers.authorization, process.env.SECRET);
    req.user = decode;
    next();
  }
  catch (error) {
    res.status(401).send({
      success: false,
      message: "Please authenticate using a valid token",
      error
    });
  }


};

export const isAdminMiddleware = async (req, res, next) => {

  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      res.status(403).send({
        success: false,
        message: "Error: Permission denied"
      });
    }
    else {
      next();
    }

  }
  catch (error) {
    res.status(403).send({
      success: false,
      message: "Please authenticate using a valid token",
      error
    });
  }
};
