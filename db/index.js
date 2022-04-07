// const mongoose = require("mongoose");
// let MONGODB_URI =
//   process.env.PROD_MONGODB ||
//   process.env.MONGODB_URI ||
//   "mongodb://127.0.0.1:27017/thirdItemsDatabase";
// //Remember this? Remember that you have to name your database. All of the other things are more of a memorization thing.

// mongoose
//   .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
//   .then(() => {
//     console.log("Successfully connected to MongoDB");
//   })
//   .catch((e) => {
//     console.error("Connection error", e.message);
//   });

// const db = mongoose.connection;

// module.exports = db;

const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

// let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI|| MONGO_URL;
//
mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology:true, useNewUrlParser:true}).then(()=>{
    console.log('successfuly connected to MongoDB');
}).catch(e =>{
    console.error('connection error', e.message)
})

const db = mongoose.connection

module.exports = db;