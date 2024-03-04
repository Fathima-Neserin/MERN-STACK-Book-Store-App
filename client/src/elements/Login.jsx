import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import { Button, Grid,  TextField,  Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';



const LOGIN_URL='http://localhost:3001/auth/login'

const Login = () => {
     const navigate= useNavigate();
     
     const userRef = useRef('');


     const [credentials,setCredentials] = useState({
          username:'',
          pwd:'',
          role:"User"

     })
     
     
     
    
     useEffect(()=>{
        
          userRef.current.focus();

     },[])
     
     const inputHandler = (e) => {
          setCredentials({...credentials,[e.target.name]:e.target.value})
     }

     const handleSubmit = async (e) => {
          e.preventDefault();
         
          
          try {
              const response = await axios.post(LOGIN_URL,credentials);
             
              const role = response?.data?.user?.role;
              if (role[0] === "User") {
                 // If the role is "Admin", navigate to AdminDashboard
                 alert('Login Successful...')
                 navigate('/userdash');
                 
               } else if (role[0] === "Mentor") {
                 // If the role is "Mentor", navigate to MentorDashboard
                 navigate('/dashment');
               } else {
                 // Handle other roles or navigate to a default route
                  navigate('/');
               }
             
 
              console.log(credentials)
              
 
          } catch (err) {
              if (!err?.response) {
                  alert('No Server Response');
              } 
             
               
              
          }
      }
 
      
  
  return (
    <div className='App'>
    <br/>
    <Typography variant='h3' className='head2' >Login Form</Typography>
    <br />
    <br />
    <div className='styleform'>
    
    <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} >
        <TextField
        variant='standard' 
        fullWidth 
        label='Username' 
        required
        type='text'
        onChange={inputHandler}
        name='username'
        inputRef={userRef}
         />
    <br />
    <br />    
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <TextField 
        variant='standard'  
        fullWidth 
        label ='Password' 
        type='password'
        required
        onChange={inputHandler} 
        name='pwd'
         /><br/>
         <br/>
         <TextField 
        variant='standard' 
        fullWidth 
        label='Role' 
        required 
        type='search'
        onChange={inputHandler}
        name='role'
        />
        </Grid> 
    <br />
    <br />    
         </Grid><br/>
         <Grid item xs={12} sm={12} md={12}>
          <Button variant='standard' id='btn' onClick={handleSubmit}>Login</Button>
         </Grid>
    <br />
    <br />     
         
          
          
          </div>
          </div>
    
  )
}


export default Login