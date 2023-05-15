import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    // required: true,
    // unique: true
  },
  slug: {
    type: String,
    required: true,
    lowercase: true
  }
});


const categoryModel = mongoose.model("categories", categorySchema);
export default categoryModel;