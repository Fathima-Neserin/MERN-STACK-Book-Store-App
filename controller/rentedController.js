const RentedBooks=require('../model/rentedModel')

// CRUD operations

const rentedBooks = async (req, res) => {
    try {
        const books = await RentedBooks.find();
        if(!books || books.length===0){
             return res.status(204).json({"message": "No rented books found"});
        }
        res.status(200).json(books);
    } catch (error) {
        console.error(error)
        res.status(500).json({"message": "Internal Server Error"});

    }
}

const rentedBook = async (req,res) => {
    const id=req.params.id
    if(!id){
        return res.status(400).json({"message": "Book ID requied"})
    }
    try {
        const book= await RentedBooks.findOne({_id:id}).exec();
        if(!book){
         return res.status(204).json({"message": `No book matches ID ${id}`})   
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
} 

const rentBook = async(req,res) => {

    const bookId = req.params.id; 

    if(!req?.body?.title){
        return res.status(400).json({"message": "title is required"})
    }
    try {
        const result = await RentedBooks.create({
            
            image:req.body.image,
            title: req.body.title,
            author: req.body.author,
            bookId: bookId
        })
        res.status(200).json({"message":"Book rented"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
const reviewBook = async (req, res) => {
    const bookId = req.params.id.trim();

    if (!bookId) {
        return res.status(400).json({ "message": "Book ID required" });
    }

    try {
        const book = await RentedBooks.findByIdAndUpdate(bookId);

        if (!book) {
            return res.status(404).json({ "message": "Book not found" });
        }

        book.reviews = book.reviews || [];

        const { reviewText, email } = req.body;

        if (!reviewText || !email) {
            return res.status(400).json({ "message": "Review text and email are required" });
        }

        const newReview = {
            reviewText,
            email,
        };

        book.reviews.push(newReview);

        // Save the updated book with the new review
        await book.save();

        res.status(200).json({ "message": "Review added" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports={
    rentedBooks,
    rentedBook,
    rentBook,
    reviewBook
}
