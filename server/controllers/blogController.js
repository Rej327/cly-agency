const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

// get all blogs
const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });

  res.status(200).json(blogs);
};

// get a single bog
const getSingleBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No blog founded" });
  }

  const blog = await Blog.findById(id);

  if (!blog) {
    return res.status(404).json({ error: "No blog founded" });
  }

  res.status(200).json(blog);
};

//GET all image
const getAllImage = async (req, res) => {
  try {
    const file = await Upload.find({}.sort({ _id: -1 }));
    res.status(200).json(file);
  } catch (error) {
    res.status(404).json({ mssg: "Data Error" });
  }
};

// create a new blog
const createBlog = async (req, res) => {
  try {
    const { title, content, file } = req.body;
    const createImage = {
      title,
      content,
      file,
    };
    if (createImage) {
      const newImage = await Blog.create(createImage);
      res.status(201).json(newImage);
    }
  } catch (error) {
    res.status(404).json({ mssg: "Invalid Data" });
  }
};

module.exports = {
  createBlog,
  getSingleBlog,
  getAllBlogs,
  getAllImage,
};
