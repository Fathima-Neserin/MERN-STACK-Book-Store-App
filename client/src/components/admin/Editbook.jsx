import React from 'react'
import  { useState } from 'react'
import { Typography , Grid, TextField , Button} from '@mui/material'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


const Editbook = (props) => {

    
 const [form,setForm]=useState({
    image:props?.data?.image ||  '',
    rental_period:props?.data?.rental_period || '',
    status:props?.data?.status || '',
  })

  const updateHandle = async(e) => {
    e.preventDefault();
 
     if(props.method==="put"){
        await axios.put(`http://localhost:3001/books/updateBook/${props.data._id}`,form)
       .then((res)=>{
         if(res.data.message==="Book updated successfully"){
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
    
        <div className='App'>
      
      <Typography variant='h3' className='head5' >Update Book</Typography>
      <br></br>
      <div className='styleform'>
    
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <Card  sx={{ width: '25%' }}>
       
       <CardMedia 
        component="img"
         sx={{ height: '8%' }}
         image={form.image}
         onChange={(e) => {
           setForm({...form,image:e.target.value})
          }}
          
          value={form.image}
          
       />
       </Card>
       <br/>
        </Grid>  
       
          <Grid item xs={12} sm={12} md={12}>
          <TextField 
          variant='standard' 
          fullWidth 
          label='Image Address' 
          required 
          type='text'
          onChange={(e) => {
            setForm({...form,image:e.target.value})
          }}
          value={form.image}
          />
          </Grid>  
        <br/>
          
          <Grid item xs={12} sm={12} md={12}>
          <TextField 
          variant='standard' 
          fullWidth 
          label='Rental Period' 
          required 
          type='text'
          onChange={(e) => {
            setForm({...form,rental_period:e.target.value})
          }}
          value={form.rental_period}
          />
          </Grid>
          <br/>
         
          <Grid item xs={12} sm={12} md={12}>
          <TextField 
          variant='standard' 
          fullWidth 
          label='Availability Status' 
          required 
          type='text'
          onChange={(e) => {
            setForm({...form,status:e.target.value})
          }}
          value={form.status}
          />
          </Grid>
          <br/>
         
        
        <Grid item xs={12} sm={12} md={12}>
        <Button variant='standard' id='btn' size='large' onClick={updateHandle} >Update</Button>
        </Grid>  
        <br/>
          </Grid>
    </div>
    </div>
    
  )
}

export default Editbook