const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require("multer");
// const hey = require("../../../../../../Users/Nilima/Desktop/nilu docs/task/images")

const usersController = require("../controllers/users.controller");

// router.get("/create/users",usersController.createUsers);
///storage engine
var storage = multer.diskStorage({
    destination:'../../../../../../Users/Nilima/Desktop/nilu docs/task/images',
    filename:(req,file,cb)=>{
      return cb(null,`${path.extname(file.originalname)}`)
    } 
  });
  const upload = multer({
    storage:storage,
    limits:{fileSize:10000000}
  }).single('profile')
  
  router.use('/profile',express.static('.../../../../../../Users/Nilima/Desktop/nilu docs/task/images'))
  router.post("/create/users",upload,usersController.createUsers);
  router.get("/fetch/users",usersController.fetchUsers);
  router.delete("/delete/users",usersController.deleteUsers);
  router.post("/update/users",upload,usersController.updateUsers)
 
  
  function errHandler(err,req,res,next){
    if(err instanceof multer.MulterError){
      res.json({
        success:0,
        message:err.message
      })
    }
  }
  router.use(errHandler)

module.exports = router;