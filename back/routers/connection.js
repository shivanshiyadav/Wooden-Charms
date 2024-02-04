const mongoose = require('mongoose');

const url = "mongodb+srv://admin:1234@cluster0.ikakadp.mongodb.net/Wooden charms?retryWrites=true&w=majority"
mongoose.connect(url)
.then((result) => {
    console.log('Database Connected..!!');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;