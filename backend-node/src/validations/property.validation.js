const { error } = require("../utils/ApiResponse");

const addProperty = async (req, res, next) => {
  try {
    if (!req.body.title || req.body.title.length === 0) {
      return res.send(error("Title must have in the field"));
    }
    if (!req.body.guests || req.body.guests.length === 0) {
      return res.send(error("Guest must have in the field"));
    }
    if (!req.body.bed || req.body.bed.length === 0) {
      return res.send(error("Bed must have in the field"));
    }
    if (!req.body.bath || req.body.bath.length === 0) {
      return res.send(error("Bath must have in the field"));
    }
    if (!req.body.date || req.body.date.length === 0) {
      return res.send(error("Date must have in the field"));
    }
    if (!req.body.price || req.body.price.length === 0) {
      return res.send(error("Price must have in the field"));
    }
    next();
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  addProperty,
};
