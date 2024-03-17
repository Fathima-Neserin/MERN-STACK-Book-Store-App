const mongoose=require('mongoose');

const reviewSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    reviewText: {
        type: String
    },
});

const rentedModel = new mongoose.Schema({
    libraryId:{
        type : Number,
        required : true
    },
    username:{
        type : String,
        required : true
    },
    image:{
        type : String 
    },
    title:{
        type : String
    },
    author:{
        type : String 
    },
    reviews : [reviewSchema],
    contact : {
        type : Number
    }
})

const rentedData= mongoose.model('rentedbook',rentedModel);
module.exports=rentedData;