
var express = require('express');
var router = express.Router();
var authModel = require('../models/apartment');
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
  }).single("apartment_image"); //Field name and max count
  
  
router.post("/uploadapartment", upload,(req, res) => {
    
      console.log(req.body);
      var imageDetails = new authModel({
        
        name: req.body.apartment_name,
        location: req.body.location,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        price: req.body.price,
        rent: req.body.Rent,
        service: req.body.Service,
        security: req.body.Security,
        release: req.body.Release,
        flatsize: req.body.flatsize,
        floor: req.body.floor,
        roomcategory: req.body.roomcategory,
        facilities: req.body.facilities,
        additionalfacilities: req.body.additionalfacilities,
        city: req.body.city,
        country: req.body.country,
        about: req.body.about,
        image: req.file.filename,
      });

      imageDetails.save(function (err, doc) {
        if (err) throw err;
        res.redirect('/addapartment');
      })

});


router.get('/apartmentdelete/:id', function(req, res) {
  console.log(req.params.id);
  authModel.findByIdAndDelete(req.params.id,function(err,result){
    if(err){
      res.redirect('/apartmentlist');
    }else{
      res.redirect('/apartmentlist');
    }
  })    
});

router.get('/apartmentedit/:id', function(req, res) {
  console.log(req.params.id);
  authModel.findById(req.params.id,function(err,result){
    if(err){
      res.redirect('/apartmentlist');
    }else{
      console.log(result);
      res.render('/addapartment',{
        apartment: result
      });
    }
  })    
});




module.exports = router;





