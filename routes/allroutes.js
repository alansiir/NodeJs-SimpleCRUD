const express = require('express')
const router = express.Router()
const Customer  = require("../models/customerscuma")
const moment = require('moment');
const userControllers = require('../controllers/usercontrollers')


//route
router.put("/update/:id", userControllers.user_put);

router.get("/edit/:id", userControllers.user_edit_get  );
  
router.get("/", userControllers.user_index_get );

router.get("/view/:id", userControllers.user_view_get); 

 router.post("/find", userControllers.user_search_post);

router.delete("/del/:id", userControllers.user_delete);
   




module.exports = router