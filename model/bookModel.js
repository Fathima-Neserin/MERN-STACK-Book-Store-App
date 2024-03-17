const mongoose=require('mongoose');

const reviewSchema = new mongoose.Schema({
    email: {
        type: String
        
    },
    reviewText: {
        type: String
        
    },
});

const bookModel = new mongoose.Schema({

     image : {
         type : String,
         required : true    
     },
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required:true
    },
    publication_year : {
        type : Number,
        required : true
    },
    genre : {
        type : String
    },
    ISBN_number : {
        type : Number
    },
    reviews : [reviewSchema],
    status : {
        type : String
    },
    pay : {
        type : String,
    },
    rented_count : {
        type : Number
    },
    languages : [{
        type : String
    }],
    rental_period : {
        type : String
    },
    description : {
        type : String,
        
    }
})

const bookData = mongoose.model('book',bookModel);
module.exports = bookData;