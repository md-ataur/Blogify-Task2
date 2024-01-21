const express = require("express");
const propertyRoute = require("./property.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/property",
    route: propertyRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
