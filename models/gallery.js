const mongoose = require('mongoose');
const gallerySchema = new mongoose.Schema({
    
    imagename:{
        type: String,
    }
});



const imagegallery = mongoose.model('gallery',gallerySchema);

module.exports = imagegallery;
