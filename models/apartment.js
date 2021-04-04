const mongoose = require('mongoose');
const apartmentSchema = new mongoose.Schema({
    
    name:{
        type: String,
    },
    location:{
        type: String,
    },
    bedrooms:{
        type: String,
    },
    bathrooms:{
        type: String,
    },
    price:{
        type: String,
    },
    rent:{
        type: String,
    },
    service:{
        type: String,
    },
    security:{
        type: String,
    },
    release:{
        type: String,
    },
    flatsize:{
        type: String,
    },
    floor:{
        type: String,
    },
    roomcategory:{
        type: String,
    },
    facilities:{
        type: String,
    },
    additionalfacilities:{
        type: String,
    },
    city:{
        type: String,
    },
    country:{
        type: String,
    },
    about:{
        type: String,
    },
    image:{
        type: String,
    }
});



const apartments = mongoose.model('apartments',apartmentSchema);

module.exports = apartments;
