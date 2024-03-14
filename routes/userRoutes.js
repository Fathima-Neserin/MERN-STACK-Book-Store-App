const express=require('express');
const router=express.Router();

const userController=require('../controller/userController');

router.route('/')
      .get(userController.getAllUsers)

router.route('/:id')
      .get(userController.getOneUser)      

router.route('/signup')      
      .post(userController.createNewUser)

router.route('/editUser/:id')     
      .put(userController.editUser) 


 module.exports=router;     