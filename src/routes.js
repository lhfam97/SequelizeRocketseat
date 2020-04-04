const express = require("express");
const UserController = require("./controllers/UserController");
const AddressController = require("./controllers/AddressController");
const TechController = require("./controllers/TechController");
const ReportController = require("./controllers/ReportController");

const routes = express.Router();

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.get("/users/:userId/addresses", AddressController.index);
routes.post("/users/:userId/addresses", AddressController.store);

routes.get("/users/:userId/techs", TechController.index);
routes.post("/users/:userId/techs", TechController.store);
routes.delete("/users/:userId/techs", TechController.delete);

routes.get("/report", ReportController.show);

module.exports = routes;
