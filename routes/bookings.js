
var express = require('express');
var router = express.Router();
var bookingModel = require('../models/booking');


router.post('/createbooking', function(req, res) {
    console.log(req.body);
    bookingModel.create(req.body).then(function(booking){
            res.redirect('/allapartments');
            //res.send(booking)
        })
        
    });

router.get('/bookingdelete/:id', function(req, res) {
        console.log(req.params.id);
        bookingModel.findByIdAndDelete(req.params.id,function(err,result){
          if(err){
            res.redirect('/bookinglist');
          }else{
            res.redirect('/bookinglist');
          }
        })    
  });






module.exports = router;
