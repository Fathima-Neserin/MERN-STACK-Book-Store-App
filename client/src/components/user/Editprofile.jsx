import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button,  Grid } from "@mui/material";
import Profile from './Profile'
import axios from 'axios';

const Editprofile = (props) => {

    
    const [details,setDetails]=useState({
    person:props?.data?.person || '',
    email:props?.data?.email || '',
    contact:props?.data?.contact || '',
    username:props?.data?.username || ''
    
  })

  
  const updateHandle = async(e) => {
    e.preventDefault();
 
     if(props.method==="put"){
        await axios.put(`http://localhost:3001/user/editUser/${props.data._id}`,details)
       .then((res)=>{
         if(res.data.message==="User updated successfully"){
         alert(res.data.message)
       window.location.reload(false)
          } else{
         alert("Error occured!!")
       }
     })
     .catch((error)=>{
         console.error(error)
     })
       }}

  return (
<>
    <div className='profile-container'>
        <div className='profile-setup'>

        
         <TextField
         fullWidth
          variant='standard' 
          label=' Name'
          required 
          type='text'  
          onChange={(e) => {
            setDetails({...details,person:e.target.value})
           }}
           value={details.person}
        />      
         <br/><br/>
       
     <TextField
          fullWidth
          variant='standard'
          label="Email"
          type='email'
          required
          onChange={(e) => {
            setDetails({...details,email:e.target.value})
           }}
           value={details.email}
        />
        <br/><br/>
        <TextField
        fullWidth
        variant='standard'
        required
        type='number'
        label="Mobile Number"
        onChange={(e) => {
          setDetails({...details,contact:e.target.value})
         }}
         value={details.contact}
        />
       <br/><br/>
       
       <TextField
        fullWidth
        variant='standard'
        required
        type='text'
        label="Username"
        onChange={(e) => {
          setDetails({...details,username:e.target.value})
         }}
         value={details.username}
        /><br/><br/><br/>
       
        <Button id='btn1' onClick={updateHandle}>Update</Button>
        
        
        </div>
        
        
  <Grid item xs={6}>
  <div className='profile-component'>
        <Profile/>
    
  
   </div>
   </Grid>
   </div>
    </>
  )
}

export default Editprofile