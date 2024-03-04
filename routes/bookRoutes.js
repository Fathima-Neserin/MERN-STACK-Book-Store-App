const express=require('express');
const router=express.Router();

const bookController=require('../controller/bookController');

router.route('/')
      .get(bookController.getAllBooks)

router.route('/:id')
      .get(bookController.getBook)

module.exports=router;      