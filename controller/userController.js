const asyncHandler=require('express-async-handler');
const bcrypt=require('bcrypt')
const { promisify } =require('util');

const compareAsync = promisify(bcrypt.compare);


const Users=require('../model/userModel')

// CRUD operations

const getAllUsers = asyncHandler(async (req, res) => {
    // Get all users from MongoDB
    const users = await Users.find().select('-password').lean()

    // If no users 
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
    }

    res.json(users)
})

const createNewUser = asyncHandler(async (req,res) => {
   const { person,email,contact,username,password,role} = req.body;

    // Confirm data

    if(!person || !email || !contact || !username || !password ){
        return res.status(400).json({message: 'All fields are required'})
    }    

    // Check for duplicate username

    const duplicate= await Users.findOne({username}).lean().exec();
    if(duplicate){
        return res.status(409).json({message: 'Duplicate username'})
}
   // Hash password 
   const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

   const userObject = { person , email , contact , username, "password": hashedPwd, role }

   // Create and store new user 
   const user = await Users.create(userObject)
   console.log(user)
   if (user) { //created 
       res.status(201).json({ message: `New user ${username} added` })
       await user.save()
   } else {
       res.status(400).json({ message: 'Invalid user data received' })
   }
})
module.exports={
    getAllUsers,
    createNewUser
}