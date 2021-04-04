var express = require('express');
var router = express.Router();
var authModel = require('../models/gallery');
var apartmentModel = require('../models/apartment');
var bookingModel = require('../models/booking');
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
      console.log(result);
      res.render('editapartment',{
        apartment: result
      });
    }
  })    
});


router.post('/apartmentedit/:id', function(req, res) {
  console.log(req.params.id);
  apartmentModel.findByIdAndUpdate(req.params.id,req.params,function(err){
    if(err){
      res.redirect('/apartmentlist');
    }else{
      console.log(req.params);
      res.redirect('apartmentlist');
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
