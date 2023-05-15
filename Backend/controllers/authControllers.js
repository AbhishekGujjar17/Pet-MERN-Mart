import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";
//signup
export const signupController = async (req, res) => {
  try {
    const { name, email, password, address, phone, answer } = req.body;

    if (!name) {
      res.send({ success: false, message: "Name is required" });
    }
    if (!email) {
      res.send({ success: false, message: "Email is required" });
    }
    if (!password) {
      res.send({ success: false, message: "Password is required" });
    }
    if (!phone) {
      res.send({ success: false, message: "Phone is required" });
    }
    if (!address) {
      res.send({ success: false, message: "Address is required" });
    }

    if (!answer) {
      res.send({ success: false, message: "Answer is required" });
    }

    const userAlreadyExists = await userModel.findOne({ email });
    if (userAlreadyExists) {
      res.status(400).send({
        success: false,
        message: "User already exists"
      });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      answer
    }).save();

    res.status(201).send({
      success: true,
      message: "User signup successfully",
      newUser
    });


  }
  catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to signup user",
      error
    });
  }

};

//login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      res.send({ success: false, message: "Please enter a valid email" });
    }
    if (!password) {
      res.send({ success: false, message: "Password cannot be blank" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      res.send({ success: false, message: "Invalid email or password" });
    }
    const validPassword = await comparePassword(password, user.password);
    if (!validPassword) {
      res.send({ success: false, message: "Invalid email or password" });
    }

    //token generation
    const token = JWT.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "2d" });

    res.status(201).send({
      success: true,
      message: "User login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email,
        password,
        phone: user.phone,
        address: user.address,
        role: user.role

      },
      token
    });

  }

  catch (error) {

    res.status(500).send({
      success: false,
      message: "Failed to login user",
      error
    });

  }

};

//forgot password

export const forgotPasswordController = async (req, res) => {

  try {
    const { email, answer, newPassword } = req.body;
    if (!email) {
      res.send({ success: false, message: "Email is required" });
    }
    if (!answer) {
      res.send({ success: false, message: "Answer is required" });
    }
    if (!newPassword) {
      res.send({ success: false, message: "Password is required" });
    }

    const user = await userModel.findOne({ email, answer });
    if (!user) {
      res.status(404).send({
        success: false,
        message: "Wrong Email or Answer",
      });
    }

    const hashedForgotPassword = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashedForgotPassword });
    res.status(201).send({
      success: true,
      message: "Password updated successfully"
    });

  }
  catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to forgot password",
      error
    });

  }

};

//update prfole
export const updateProfileController = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    const user = await userModel.findById(req.user._id);
    //password
    if (password && password.length < 6) {
      return res.json({ error: "Passsword is required and 6 character long" });
    }
    const hashedPassword = password ? await hashPassword(password) : undefined;
    const updatedUser = await userModel.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        password: hashedPassword || user.password,
        phone: phone || user.phone,
        address: address || user.address,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Profile Updated SUccessfully",
      updatedUser,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Error WHile Update profile",
      error,
    });
  }
};

//test
export const testController = (req, res) => {

  try {
    res.status(200).send({
      success: true,
      message: "Test middleare route is working"
    });
  }

  catch (error) {
    res.status(500).send({
      success: false,
      message: "Test middleare route is not working",
      error
    });

  }
};

//protected auth routes

export const userAuthController = (req, res) => {

  try {
    res.status(200).send({
      success: true,
      message: "User authenticated successfully"
    });
  }
  catch (error) {
    res.status(500).send({
      success: false,
      message: "User authentication failed",
      error
    });
  }
};

export const adminAuthController = (req, res) => {

  try {
    res.status(200).send({
      success: true,
      message: "Admin authenticated successfully"
    });
  }
  catch (error) {
    res.status(500).send({
      success: false,
      message: "Admin authentication failed",
      error
    });
  }
};

//orders
export const getOrderController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ buyer: req.user._id })
      .populate("products", "-photo")
      .populate("buyer", "name");
    res.json(orders);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error WHile Geting Orders",
      error,
    });
  }
};
//orders
export const getOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({})
      .populate("products", "-photo")
      .populate("buyer", "name")
      .sort({ createdAt: "-1" });
    res.json(orders);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error WHile Geting Orders",
      error,
    });
  }
};

//order status
export const orderStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const orders = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    res.json(orders);
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error While Updateing Order",
      error,
    });
  }
};
