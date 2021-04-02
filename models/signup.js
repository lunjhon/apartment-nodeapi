const mongoose = require('mongoose');
const signupSchema = new mongoose.Schema({
    first_name:{
        type: String,
    },
    last_name:{
        type: String,
    },
    username:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    is_active:{
        type: Boolean,
        default: true,
    }
});



const signup = mongoose.model('users',signupSchema);

module.exports = signup;
