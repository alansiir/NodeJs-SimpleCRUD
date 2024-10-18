const express = require('express')
const router = express.Router()
const Customer  = require("../models/customerscuma")
const moment = require('moment');
const userControllers = require('../controllers/usercontrollers')


router.get("/add.html", userControllers.user_add_get );
router.post("/add.html", userControllers.user_post);    












module.exports = router