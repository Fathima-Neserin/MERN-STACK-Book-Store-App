const mongoose=require('mongoose');

const userModel= new mongoose.Schema({
    id : {
        type : Number
    }, 
    person : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required: true
    },
    contact : {
        type : Number,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : [{
        type : String,
        default: "User"
    }]
})

const userData = mongoose.model('user',userModel);
module.exports = userData;