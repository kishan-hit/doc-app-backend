const express = require("express");
const { loginController, 
    registerController, 
    authController, 
    applyDoctorController, 
    getNotificationsController,
    deleteNotificationsController} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");


const router = express.Router();

router.post("/login",loginController);

router.post("/register",registerController);

router.post("/getUserData", authMiddleware, authController);

router.post("/apply-doctor", authMiddleware, applyDoctorController);

router.post("/get-notifications", authMiddleware, getNotificationsController);

router.post("/delete-notifications", authMiddleware, deleteNotificationsController);

module.exports = router;