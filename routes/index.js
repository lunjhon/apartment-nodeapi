var express = require('express');
var router = express.Router();
var authModel = require('../models/gallery');
var apartmentModel = require('../models/apartment');
var bookingModel = require('../models/booking');
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
  

/* GET home page. */
router.get('/', function(req,res,next){
  authModel.find({}).limit(6).then(function(imagegallery){
    apartmentModel.find({}).limit(6).then(function(apartments){
      res.render('index',{ apartmentlist : apartments ,imageslist : imagegallery });
  
  })
    

})
});

router.get('/addapartment', function(req, res, next) {
  res.render('addapartment', { title: 'Express' });
});

router.get('/apartmentlist', function(req,res,next){
  apartmentModel.find({}).then(function(apartments){
    res.render('apartmentlist',{
      apartmentlist : apartments
    });

})
  
});

router.get('/bookinglist', function(req,res,next){
  bookingModel.find({}).then(function(booking){
    res.render('bookinglist',{
      bookinglist : booking
    });

})
  
})

router.get('/apartmentedit/:id', function(req, res) {
  console.log(req.params.id);
  apartmentModel.findById(req.params.id,function(err,result){
    if(err){
      res.redirect('/apartmentlist');
    }else{
      res.render('editapartment',{
        apartment: result
      });
    }
  })    
});


router.post('/apartmentedit/:id', upload,function(req, res,next) {
  
    console.log(req.body.apartment_name)
  var apartDetails = {
        
        name: req.body.apartment_name,
        location: req.body.location,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        price: req.body.price,
        rent: req.body.Rent,
        service: req.body.service,
        security: req.body.security,
        release: req.body.release,
        flatsize: req.body.flatsize,
        floor: req.body.floor,
        roomcategory: req.body.roomcategory,
        facilities: req.body.facilities,
        additionalfacilities: req.body.additionalfacilities,
        city: req.body.city,
        country: req.body.country,
        about: req.body.about,
        image: req.file.filename,
      };
  console.log(apartDetails)
  apartmentModel.findByIdAndUpdate(req.params.id,apartDetails,function(err){
    if(err){
      res.redirect('/apartmentlist');
    }else{
      console.log(apartDetails);
      res.redirect('/apartmentlist');
    }
  })    
});



router.get('/imageslist', function(req,res,next){
  authModel.find({}).then(function(imagegallery){
    res.render('imageslist',{
      imageslist : imagegallery
    });

})
  
})

router.get('/ourgallery', function(req,res,next){
  authModel.find({}).then(function(imagegallery){
    res.render('ourgallery',{
      imageslist : imagegallery
    });

})
  
})

router.get('/allapartments', function(req,res,next){
  apartmentModel.find({}).then(function(apartments){
    res.render('allapartments',{
      apartmentslist : apartments
    });

})
  
})

router.get('/singleapartment/:id', function(req, res,next) {
  console.log(req.params.id);
  apartmentModel.findOne({_id:req.params.id}).then(function(apartments){
    res.render('singleapartment',{
      apartmentdetail : apartments
    });

}).catch(next)  
});



router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});



router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Express' });
});


router.get('/index', function(req,res,next){
  authModel.find({}).limit(6).then(function(imagegallery){
    apartmentModel.find({}).limit(6).then(function(apartments){
      res.render('index',{ apartmentlist : apartments ,imageslist : imagegallery });
  
  })
    

})
});
  


module.exports = router;
