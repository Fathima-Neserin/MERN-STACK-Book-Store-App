import React from 'react'
import { Typography , Grid, TextField , Button} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import  { useRef, useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';


const SIGNUP_URL=('http://localhost:3001/user/signup')




const Signup = () => {
   
  const navigate=useNavigate();

  const nameRef= useRef();
  
 
  const [details,setDetails] = useState({
    person:'',
    email:'',
    contact:'',
    username:'',
    password:'',
    role: "User"
  })

 

 
  useEffect(()=>{

      nameRef.current.focus();

  },[])
 

  const changeHandler = async (e) =>{
   
      setDetails({ ...details, [e.target.name]: e.target.value });
    
  }
 
  const submitForm = async(e) =>{
     
    e.preventDefault();

    try {
      const response = await axios.post(SIGNUP_URL,details)
      if(response.data.message===`New user ${details.username} added`){
        alert(response.data.message)
        navigate ('/login')
      }
      else{
        alert('Signup failed')
      }

      
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <div className='App'>
    <br/>

    <Typography variant='h3' className='head2' >SignUp Form</Typography>
    <br></br>
    <div className='styleform'>
  
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6}>
        <TextField 
        variant='standard' 
        fullWidth 
        label='Name'
        required 
        type='text'  
        onChange={changeHandler}
        value={details.person}
        name='person'
        inputRef={nameRef}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
        <TextField 
        variant='standard' 
        fullWidth 
        label='Email' 
        required 
        type='email'
        onChange={changeHandler}
        value={details.email}
        name='email'
        />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <TextField 
        variant='standard' 
        fullWidth 
        label='Mobile Number' 
        required 
        type='number'
        onChange={changeHandler}
        value={details.contact}
        name='contact'
        />
        </Grid>  
        <Grid item xs={12} sm={12} md={12}>
        <TextField 
        variant='standard' 
        fullWidth 
        label='Username'
        required 
        type='text'
        onChange={changeHandler}
        value={details.username}
        name='username'
        />
        </Grid>  
        <Grid item xs={12} sm={12} md={12}>
        <TextField 
        variant='standard' 
        fullWidth 
        label='Password' 
        required 
        type='password'
        onChange={changeHandler}
        value={details.password}
        name='password'
        />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <TextField 
        variant='standard' 
        fullWidth 
        label='Role' 
        required 
        type='search'
        onChange={changeHandler}
        value={details.role}
        name='role'
        >
        
        </TextField>
        </Grid><br/> 
        <Grid item xs={12} sm={12} md={12}>
        <Button variant='standard' id='btn' onClick={submitForm}  >SignUp</Button>
        </Grid>  
        <Grid item xs={12} sm={12} md={12}>
        <Link to={'/login'}>Login</Link>
          </Grid>
          </Grid>
          </div>
          </div>
          )
  }


export default Signup