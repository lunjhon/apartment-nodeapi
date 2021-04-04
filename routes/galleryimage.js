
var express = require('express');
var router = express.Router();
var authModel = require('../models/gallery');
const multer = require("multer");


var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./public/images");
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
  });
  
  var upload = multer({
    storage: Storage,
  }).single("image"); //Field name and max count
  
  router.get("/showgalleryimage", (req, res) => {
  
      imageData.exec(function(err,data){
          if(err) throw err;
  
          console.log(data)
  
          
      })
  });
  
router.post("/uploadgalleryimage", (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.end("Something went wrong");
    } else {
      console.log(req.file.path);
      var imageName = req.file.filename;

      var imageDetails = new authModel({
        imagename: imageName,
      });

      imageDetails.save(function (err, doc) {
        if (err) throw err;

        console.log("Image Saved");
        res.redirect('/gallery');
      });
    }
  });
});



router.get('/imagedelete/:id', function(req, res) {
        console.log(req.params.id);
        authModel.findByIdAndDelete(req.params.id,function(err,result){
          if(err){
            res.redirect('/imageslist');
          }else{
            res.redirect('/imageslist');
          }
        })    
  });








module.exports = router;





