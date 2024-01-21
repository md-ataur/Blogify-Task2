const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    guests: {
      type: Number,
      required: true,
      trim: true,
    },
    bed: {
      type: Number,
      required: true,
      trim: true,
    },
    bath: {
      type: Number,
      required: true,
      trim: true,
    },
    wifi: {
      type: Boolean,
      required: true,
      trim: true,
    },
    kitchen: {
      type: Boolean,
      required: true,
      trim: true,
    },
    parking: {
      type: Boolean,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    reviews: {
      type: Number,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("properties", propertySchema);
