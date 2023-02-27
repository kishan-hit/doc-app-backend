const express = require("express");
const { getAllUsersController, getAllDoctorsController } = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get('/getAllUsers', authMiddleware, getAllUsersController);

router.get('/getAllDoctors', authMiddleware, getAllDoctorsController);

module.exports = router