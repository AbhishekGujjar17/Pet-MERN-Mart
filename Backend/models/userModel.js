import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: {},
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const userModel = mongoose.model("users", userSchema);
export default userModel;