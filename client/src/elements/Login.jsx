import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import { Button, Grid,  TextField,  Typography } from '@mui/material'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'


const LOGIN_URL='/auth/login'

const Login = () => {
     const navigate= useNavigate();
     
     const userRef = useRef('');

     const [credentials,setCredentials] = useState({
          username:'',
          pwd:'',
          role:"User",    
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
            
            const response = await axios.post(LOGIN_URL, credentials);
            console.log(credentials)

            const accessToken = response?.data?.token;
            sessionStorage.setItem('Token',accessToken)
            const accessID = response?.data?.id;
            sessionStorage.setItem('ID',accessID)
            const accessUserName = response?.data?.username
            sessionStorage.setItem('username',accessUserName)

            const role = response?.data?.role;
              if (role[0] ==="User" ) {
                 // If the role is "User", navigate to UserDashboard
                 alert('Login Successful...')
                 navigate('/userdash');
                 
               } else if (role[0] === "Admin") {
                 // If the role is "Admin", navigate to AdminDashboard
                 alert('Login Successful...')
                 navigate('/admindash');
               } else {
                 alert("Unauthorized user")
               }
             
              console.log(credentials)
              
          } catch (err) {
              if (!err?.response) {
                  alert('No Server Response',err);
                  console.error(err)
              }}}
  
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
      </Grid>
         </Grid><br/>
         <Grid item xs={12} sm={12} md={12}>
          <Button variant='standard' id='btn' onClick={handleSubmit}>Login</Button>
         </Grid>
    <br />
    <br />     
          </div>
          </div>
    
  )}
export default Login