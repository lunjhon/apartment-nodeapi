//db.js

const mongoose = require('mongoose')
//apartments
//passw123456
const url = `mongodb://jhon:passw123456@db-apartments-shard-00-00.nk9ey.mongodb.net:27017,db-apartments-shard-00-01.nk9ey.mongodb.net:27017,db-apartments-shard-00-02.nk9ey.mongodb.net:27017/apartments?ssl=true&replicaSet=atlas-29rf54-shard-0&authSource=admin&retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

