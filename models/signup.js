const mongoose = require('mongoose');
const signupSchema = new mongoose.Schema({
    
    username:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    }
});



const signup = mongoose.model('users',signupSchema);

module.exports = signup;
