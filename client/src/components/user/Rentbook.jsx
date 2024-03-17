import React, { useEffect, useRef, useState } from 'react'
import { Typography , Grid, TextField , Button} from '@mui/material'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


const Rentbook = (props) => {

 const bookRef= useRef('');

 const [form,setForm]=useState({
  title:props?.data?.title || '',
  author:props?.data?.author || '',
  image:props?.data?.image || '',
  libraryId:'',
  username:'',
  contact:''
})

useEffect(() => {
      bookRef.current.focus();
},[])

const rentHandle = async(e) => {
   e.preventDefault();

    console.log('bookId', props.data._id);

    if(props.method==="post"){
       await axios.post(`/ReNtEd/rentBook/${props.data._id}`,form).then((res)=>{
        console.log('backend response:',res.data)
        if(res.data.message==="Book rented"){
        alert(res.data.message)
      window.location.reload(false)
         } else{
        alert("Renting request failed")
      }
    })
    .catch((error)=>{
        console.error(error)
        alert(error)
    })
      }}
    

  return (
    <div className='App'>
      
    <Typography variant='h3' className='head5' >Rent Book</Typography>
    <br></br>
    <div className='styleform'>
  
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <TextField 
        variant='standard' 
        fullWidth 
        label=' Book Name'
        required 
        type='text'  
         onChange={(e) => {
          setForm({...form,title:e.target.value})
         }}
         value={form.title}
         inputRef={bookRef}
         disabled
        />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <TextField 
        variant='standard' 
        fullWidth 
        label='Author' 
        required 
        type='text'
        onChange={(e) => {
          setForm({...form,author:e.target.value})
        }}
        value={form.author}
        disabled
        />
        </Grid>
        
        <Grid item xs={12} sm={12} md={12}>
        <Card  sx={{ width: '25%' }}>
       
       <CardMedia 
        component="img"
         sx={{ height: '8%' }}
         image={form.image}
       />
       </Card>
       <br/>
        </Grid>  
        <Grid item xs={12} sm={12} md={12}>
        <TextField 
        variant='standard' 
        fullWidth 
        label='Library ID' 
        required 
        type='number'
        onChange={(e) => {
          setForm({...form,libraryId:e.target.value})
        }}
        value={form.libraryId}
        />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
        <TextField 
        variant='standard' 
        fullWidth
        label='Username'
        required 
        type='text'
        onChange={(e) => {
          setForm({...form,username:e.target.value})
        }}
        value={form.username}
        />
        </Grid>  
        <Grid item xs={12} sm={12} md={12}>
        <TextField 
        variant='standard' 
        fullWidth 
        label='Contact Number' 
        required 
        type='text'
        onChange={(e) => {
          setForm({...form,contact:e.target.value})
        }}
        value={form.contact}
        />
        </Grid>
        
        <Grid item xs={12} sm={12} md={12}>
        <Button variant='standard' id='btn' onClick={rentHandle}>Rent</Button>
        </Grid>  
        
          </Grid>
          </div>
          </div>
    
  )}
export default Rentbook