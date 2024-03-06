const mongoose=require('mongoose');

const reviewSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
    },
    reviewText: {
        type: String,
        required: true,
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
        required : true
    },
    publication_year : {
        type : Number,
        required : true
    },
    genre : {
        type : String,
        required : true
    },
    ISBN_number : {
        type : Number,
        required : true
    },
    reviews : [reviewSchema],
    status : {
        type : String
    },
    pay : {
        type : String
    }
})

const bookData = mongoose.model('book',bookModel);
module.exports = bookData;