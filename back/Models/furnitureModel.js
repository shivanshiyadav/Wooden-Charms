const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name : String,
    description : String,
    price : String,
    offer : Number,
    image : String,
    // location : {type : String, default : 'Not Specified'},
});

module.exports = model( 'furniture', mySchema );