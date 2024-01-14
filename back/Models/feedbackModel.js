const {model, Schema}  = require('../connection');

const mySchema = new Schema({
    name : String,
    reaction:String,
    rating:String,
    email : String,
    message : String

})

module.exports = model( 'feedback', mySchema);