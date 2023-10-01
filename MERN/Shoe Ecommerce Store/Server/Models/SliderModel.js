import mongoose from "mongoose";
const sliderSchema = mongoose.Schema(
{
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image_url: {
        type: String,
        required: true,
      },

      product_url: {
        type: String,
        required: true,
      },

    },
    {
      timestamps: true,
    } 

);

const slider = mongoose.model("slider", sliderSchema);

export default slider;