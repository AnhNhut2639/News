const express = require("express");
const controllers = require("../controllers");

const adminRouter = express.Router();
adminRouter.get("/", controllers.admin.admin);
adminRouter.get("/approve", controllers.admin.adminApprove);
adminRouter.get("/type", controllers.admin.adminType);
adminRouter.post("/type", controllers.admin.adminAddType);
adminRouter.get("/profile", controllers.admin.adminProfile);
adminRouter.post("/profile", controllers.admin.adminUpdateProfile);
adminRouter.get("/account", controllers.admin.adminAccount);
adminRouter.get("/register", controllers.admin.adminRegister);
adminRouter.post("/register", controllers.admin.adminAddAccount);
adminRouter.get("/changepass", controllers.admin.adminChangePass);
adminRouter.post("/changepass", controllers.admin.adminChange);
adminRouter.get("/advertise", controllers.admin.adminAdvertise);
adminRouter.get("/banner", controllers.admin.adminBanner);
module.exports = adminRouter;
