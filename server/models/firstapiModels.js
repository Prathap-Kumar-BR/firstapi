const mongoose = require("mongoose");

const testimonialSchema = mongoose.Schema(
  {
    photo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
    testimonialdescription: {
      type: String,
      required: true,
    },
    active: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const testimonialModel = mongoose.model("testimonial", testimonialSchema);

module.exports = testimonialModel;
