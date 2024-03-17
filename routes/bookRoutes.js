const express=require('express');
const router=express.Router();

const bookController=require('../controller/bookController');

router.route('/')
      .get(bookController.getAllBooks)

router.route('/:id')
      .get(bookController.getBook)

router.route('/addBook')
      .post(bookController.addBook)      

router.route('/removeBook/:id')
      .delete(bookController.removeBook)

router.route('/updateBook/:id')   
      .put(bookController.editBook)   


module.exports=router;      