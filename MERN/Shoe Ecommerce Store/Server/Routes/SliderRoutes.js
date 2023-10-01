import express from "express";
import asyncHandler from "express-async-handler";
import Slider from "./../Models/SliderModel.js";
import { admin, protect } from "./../Middleware/AuthMiddleware.js";


const sliderRoute = express.Router();
// CREATE SLIDER
sliderRoute.post(
  "/",
  // protect,
  // admin,
  asyncHandler(async (req, res) => {
    const { title,description, image_url, product_url } = req.body;
    const productExist = await Product.findOne({ title });
    if (productExist) {
      res.status(400);
      throw new Error("Slider name already exist");
    } else {
      const slider = new slider({
        title,description,
        image_url,product_url,
        user: req.user._id,
      });
      if (product) {
        const createdslider = await slider.save();
        res.status(201).json(createdslider);
      } else {
        res.status(400);
        throw new Error("Invalid slider data");
      }
    }
  })
)

// GET ALL PRODUCT
sliderRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const pageSize = 12;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const count = await Slider.countDocuments({ ...keyword });
    const sliders = await Slider.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 });
    res.json({ sliders, page, pages: Math.ceil(count / pageSize) });
  })
);

sliderRoute.delete(
  "/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const slider = await Slider.findById(req.params.id);
    if (slider) {
      await slider.remove();
      res.json({ message: "Slider deleted" });
    } else {
      res.status(404);
      throw new Error("Slider not Found");
    }
  })
);

// UPDATE PRODUCT
sliderRoute.put(
  "/:id",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const { title,description, image_url,product_url } = req.body;
    const slider = await Slider.findById(req.params.id);
    if (slider) {
      slider.title = title || product.title;
      slider.description = description || product.description;
      slider.image_url = image_url || product.image_url;
      slider.product_url = product_url || product.product_url;
    //  slider.countInStock = countInStock || product.countInStock;

      const updatedSlider = await slider.save();
      res.json(updatedSlider);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);
export default sliderRoute;