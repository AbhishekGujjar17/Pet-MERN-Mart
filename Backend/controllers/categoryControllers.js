import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";

//create
export const createCategoryController = async (req, res) => {
  try {
    //get data
    const { name } = req.body;
    //check missing
    if (!name) {
      res.status(400).send({ success: false, message: "Name is required" });
    }
    //already exists
    const categoryAlreadyExist = await categoryModel.findOne({ name });
    if (categoryAlreadyExist) {
      res.status(400).send({
        success: false,
        message: "Category already exists"
      });
    }
    //new object
    const newCategory = new categoryModel({
      name,
      slug: slugify(name)
    })
      .save();

    //send response
    res.status(201).send({
      success: true,
      message: "Category created successfully",
      newCategory
    });

  }

  catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error
    });
  }
};

//read
export const getCategoriesController = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: "Categories fetched successfully",
      categories
    });
  }
  catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error
    });
  }

};

export const getCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;
    if (!slug) {
      res.status(400).send({
        success: false,
        message: "Invalid category id"
      });
    }
    const category = await categoryModel.findOne({ slug });
    if (category) {
      res.status(200).send({
        success: true,
        message: "Fetched category successfuly"
      });
    }
    else {
      res.status(404).send({
        success: false,
        message: "No category found"

      });
    }

  }
  catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error
    });
  }

};

//update
export const updateCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!id) {
      res.status(400).send({
        success: false,
        message: "Invalid category id"
      });
    }
    const updatedCategory = await categoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true });
    res.status(200).send({
      success: true,
      message: "Updated category successfuly",
      updatedCategory
    });

  }
  catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error
    });
  }


};

//delete
export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).send({
        success: false,
        message: "Invalid category id"
      });
    }
    await categoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Category deleted successfuly"
    });

  }
  catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error
    });
  }


};