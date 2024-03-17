const express=require('express');
const router=express.Router();

const rentedController=require('../controller/rentedController');

router.route('/:username')
      .get(rentedController.rentedBooks)

router.route('/:id')
      .get(rentedController.rentedBook)

router.route('/rentBook/:id')
      .post(rentedController.rentBook)
      
router.route('/addReview/:id')
      .put(rentedController.reviewBook)    
      
      
module.exports=router;      