const mongoose=require('mongoose');

const rentedModel = new mongoose.Schema({
    
    image:{
        type : String 
    },
    title:{
        type : String
    },
    author:{
        type : String 
    } 
})

const rentedData= mongoose.model('rentedbook',rentedModel);
module.exports=rentedData;