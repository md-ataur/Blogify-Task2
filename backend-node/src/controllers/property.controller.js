const httpStatus = require("http-status");
const { propertyService } = require("../services");
const { success, error } = require("../utils/ApiResponse");

// Get all data
const getProperties = async (req, res) => {
  try {
    const data = await propertyService.getProperties();
    res.status(httpStatus.OK).send(success(data, "Properties found successfully"));
  } catch (err) {
    res.send(error(err.message));
  }
};

// Add data
const addProperty = async (req, res) => {
  try {
    const data = await propertyService.addProperty(req.body);
    res.status(httpStatus.CREATED).send(success(data, "Property added successfully"));
  } catch (err) {
    res.send(error(err.message));
  }
};

module.exports = {
  getProperties,
  addProperty,
};
