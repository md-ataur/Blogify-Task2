const { Property } = require("../models");

/**
 * Get all data
 * @returns
 */
const getProperties = async () => {
  const properties = await Property.find({});
  if (properties.length > 0) {
    return properties;
  }
  throw new Error("Properties Not found!", { cause: 6000 });
};

/**
 * Add data
 * @param {data}
 * @returns
 */
const addProperty = async (data) => {
  const response = await Property.create({
    title: data.title,
    guests: data.guests,
    bed: data.bed,
    bath: data.bath,
    wifi: data.wifi,
    kitchen: data.kitchen,
    parking: data.parking,
    price: data.price,
    reviews: data.reviews,
    date: data.date,
    url: data.url,
  });

  return response;
};
module.exports = {
  getProperties,
  addProperty,
};
