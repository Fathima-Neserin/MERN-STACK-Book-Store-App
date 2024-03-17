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


const addBook = async (req,res) => {
    try {
        
    const { title,image,genre,languages,rental_period,description,status,ISBN_number,publication_year,author} = req.body;
 
     
     if(!title || !image || !genre || !languages || !rental_period || !status || !ISBN_number || !publication_year || !description || !author){
         return res.status(400).json({message: 'All fields are required'})
     }    

 
    // Create and store new book 
    const  newBook = await Books.create({
        title,
        author,
        image,
        genre,
        languages,
        rental_period,
        description,
        status,
        ISBN_number,
        publication_year
    })
    console.log(newBook)
    if (newBook) { //created 
        res.status(200).json({ message: `New book ${title} added` })
        await newBook.save()
    } else {
        res.status(400).json({ message: 'Invalid book data received' })
    }}
    catch(error){
        console.error(error)
        return res.status(500).json({"message": "Internal server error"})
        
    }
 }

const removeBook = async (req, res) => {

    try {
        const id = req.params.id;
        const deleteBook = await Books.findById(id);
        const result = await Books.findByIdAndDelete(id);
        res.status(200).json({'message': `Book deleted successfully`});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const editBook = async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required' });
    }
    try {
        const id = req.params.id;
        const updateBook = await Books.findById(id);
        if (!updateBook) {
            return res.status(204).json({ 'message': `No book matches ID ${req.params.id}` });
        }
        const updatedBook = await Books.findByIdAndUpdate(id,req.body, {new:true})
        // Check if the request is coming from the book rental route
        if (req.originalUrl.includes('/rentBook/:id')) {
            // Increment the rented count by 1
            updateBook.rented_count = (updateBook.rented_count || 0) + 1;
        }
        // Save the updated book to the database
        await updateBook.save();
        res.status(200).json({ 'message': 'Book updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports={
    getAllBooks,
    getBook,
    addBook,
    removeBook,
    editBook
}