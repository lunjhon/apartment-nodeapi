const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
    
    fullname:{
        type: String,
    },
    phone:{
        type: String,
    },
    email:{
        type: String,
    },
    fmembers:{
        type: String,
    },
    children:{
        type: String,
    },
    message:{
        type: String,
    }
});



const booking = mongoose.model('booking',bookingSchema);

module.exports = booking;
