
var express = require('express');
var router = express.Router();
var authModel = require('../models/signup');
var bcrypt = require('bcrypt');

router.post('/signup', function(req, res) {
    const password = req.body.password;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        req.body.password = hash;
        authModel.create(req.body).then(function(signup){
            res.redirect('/index');
        })
        
    });
});


router.post('/login', function(req, res) {
    const password = req.body.password;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        req.body.password = hash;
        authModel.findOne({id:req.body.email}).then(function(signup){
            res.redirect('/apartmentlist');

        })
        
    });
});





module.exports = router;
