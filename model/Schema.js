const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fname : {
        type : String,
        required : true,
        trim : true
    },
    imgPath : {
        type : String,
        required : true,
    },
    date : {
        type : Date,
        required : true,
    }
})

const User = new mongoose.model ('users', UserSchema);

module.exports = User    