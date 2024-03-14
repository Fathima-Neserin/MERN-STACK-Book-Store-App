import React, { useEffect, useRef, useState } from 'react'
import { Typography , Grid, TextField , Button} from '@mui/material'
import Sidebar from './Sidebar'
import axios from 'axios';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';



const Rentbook = (props) => {

 const bookRef= useRef('');


 const [form,setForm]=useState({
  title:props?.data?.title || '',
  author:props?.data?.author || '',
  image:props?.data?.image || '',
  libraryId:'',
  userName:'',
  contactNo:''
})



useEffect(() => {
      bookRef.current.focus();
},[])

const rentHandle = async(e) => {
   e.preventDefault();

    console.log('bookId', props.data._id);

    if(props.method==="post"){
       await axios.post(`http://localhost:3001/ReNtEd/rentBook/${props.data._id}`,form)
      .then((res)=>{
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
        />
        </Grid>
        
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
        label='Name'
        required 
        type='text'
        onChange={(e) => {
          setForm({...form,userName:e.target.value})
        }}
        value={form.userName}
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
          setForm({...form,contactNo:e.target.value})
        }}
        value={form.contactNo}
        />
        </Grid>
        
        <Grid item xs={12} sm={12} md={12}>
        <Button variant='standard' id='btn' onClick={rentHandle}>Rent</Button>
        </Grid>  
        
          </Grid>
          </div>
          </div>
    
  )
}


export default Rentbook