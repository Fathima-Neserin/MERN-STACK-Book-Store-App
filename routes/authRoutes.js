const express=require('express');
const router=express.Router();

const authController=require('../controller/authController')

router.route('/login')
      .post(authController.handleLogin)

router.route('/signup')
      .post(authController.handleSignup)
      
 module.exports=router;     