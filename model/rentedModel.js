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
    
    image:{
        type : String 
    },
    title:{
        type : String
    },
    author:{
        type : String 
    },
    reviews : [reviewSchema]
})

const rentedData= mongoose.model('rentedbook',rentedModel);
module.exports=rentedData;