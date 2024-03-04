const Books = require('../model/bookModel')

// CRUD operations

const getAllBooks = async (req, res) => {
    try {
        const books = await Books.find();
        if(!books || books.length===0){
             return res.status(204).json({"message": "No books found"});
        }
        res.status(200).json(books);
    } catch (error) {
        console.error(error)
        res.status(500).json({"message": "Internal Server Error"});

    }
}

const getBook = async (req,res) => {
    const id=req.params.id
    if(!id){
        return res.status(400).json({"message": "Book ID requied"})
    }
    try {
        const book= await Books.findOne({_id:id}).exec();
        if(!book){
         return res.status(204).json({"message": `No book matches ID ${id}`})   
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
} 
module.exports={
    getAllBooks,
    getBook
}