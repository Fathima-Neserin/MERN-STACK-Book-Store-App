const asyncHandler=require('express-async-handler');
const bcrypt=require('bcrypt')
const { promisify } =require('util');

const compareAsync = promisify(bcrypt.compare);


const Users=require('../model/userModel')

// CRUD operations

const getAllUsers = asyncHandler(async (req, res) => {
     // Get all users with role "User" from MongoDB
     const users = await Users.find({ role: "User" }).select('-password').lean()

    // If no users 
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
    }

    res.json(users)
})


const getOneUser = async (req,res) => {
    const id=req.params.id
   
    if(!id){
        

        return res.status(400).json({"message": "User ID requied"})
    }
    try {
      

        const user= await Users.findById(id).exec();
        console.log(user)
        if(!user){
         return res.status(204).json({"message": `No user matches ID ${id}`})   
        }
       
         res.json(user);
    } catch (error) {
        console.error("An error occurred while fetching user data:", error);

        res.status(500).json({error:error.message})
        console.error(error)
    }
}


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
   const  newUser = await Users.create(userObject)
   console.log(newUser)
   if (newUser) { //created 
       res.status(201).json({ message: `New user ${username} added` })
       await newUser.save()
   } else {
       res.status(400).json({ message: 'Invalid user data received' })
   }
})

const editUser = asyncHandler( async(req, res) => {
    if(!req?.params?.id){
        return res.status(400).json({'message': 'ID parameter is required'});
    }
    try {
        const id = req.params.id;
        const updateUser = await Users.findById(id);
        if(!updateUser){
            return res.status(204).json({'message': `No user matches ID ${req.params.id}`});
        }
        const updatedUser = await Users.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({'message': 'User updated successfully'})
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


const removeUser = async (req, res) => {

    try {
        const id = req.params.id;
        const deleteUser = await Users.findById(id);
        const result = await Users.findByIdAndDelete(id);
        res.status(200).json({'message': `User deleted successfully`});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports={
    getAllUsers,
    getOneUser,
    createNewUser,
    editUser,
    removeUser
}