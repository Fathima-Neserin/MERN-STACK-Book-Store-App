import React, { useState } from 'react'
import Rentedbooks from './Rentedbooks'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import axios from "axios";
import { Button, Grid } from "@mui/material";
import TextField from '@mui/material/TextField';




const Review = (props) => {

  const [fields,setFields]=useState({
    title:props?.data?.title || '',
    image:props?.data?.image || '',
    reviewText:'',
    email:''
    
  })
  
  const reviewHandle = async(e) => {
    e.preventDefault();
 
     console.log('bookId', props.data._id);
 
     if(props.method==="put"){
        await axios.put(`http://localhost:3001/ReNtEd/addReview/${props.data._id}`,fields)
       .then((res)=>{
         if(res.data.message==="Review added"){
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
   <div className='review-container'>
      

  <div className='review-component'>
 

  <div className='review'>
  
      
        <Grid item  md={2}>
      <Card  sx={{ width: '50%' }}>
       
      <CardMedia 
       component="img"
        sx={{ height: '40%' }}
        image={fields.image}
        onChange={(e) => {
          setFields({...fields,image:e.target.value})
         }}
         
         value={fields.image}
         
      />
      </Card>
      <br/>
      <Grid container>
        
      <TextField
          variant='standard' 
          fullWidth
          label=' Book Name'
          required 
          type='text'  
          onChange={(e) => {
            setFields({...fields,title:e.target.value})
           }}
           
           value={fields.title}
           disabled
     />       
        
        </Grid>
        <br/><br/>
       
     <TextField
          id="outlined-multiline-static"
          fullWidth
          label="Add your review"
          multiline
          rows={8}
          type='text'
          required
          className='review-box'
          onChange={(e) => {
            setFields({...fields,reviewText:e.target.value})
           }}
           
           value={fields.reviewText}
        />
        <br/><br/>
        <TextField
        variant='standard'
        fullWidth
        required
        type='email'
        label="Enter your email"
        onChange={(e) => {
          setFields({...fields,email:e.target.value})
         }}
         
         value={fields.email}
        />
       <br/>
       <br/>
       
        <Button id='btn1' onClick={reviewHandle}>Add</Button>
        </Grid>
        
        
        </div>
        
  </div>
  <div className='rented-component'>
        <Rentedbooks/>
    
  
   </div>
   </div>
)
}
  

export default Review