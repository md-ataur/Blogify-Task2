const express = require("express");
const { propertyValidation } = require("../../validations");
const { propertyController } = require("../../controllers");

const router = express.Router();

router.get("/", propertyController.getProperties);
router.post("/add", propertyValidation.addProperty, propertyController.addProperty);

module.exports = router;
