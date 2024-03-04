import React, { useEffect, useRef, useState } from 'react'
import { Typography , Grid, TextField , Button} from '@mui/material'
import Sidebar from './Sidebar'
import axios from 'axios';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';



const Rentbook = (props) => {

 const bookRef= useRef('');


 const [form,setForm]=useState({
  title:props.data.title || '',
  author:props.data.author || '',
  image:props.data.image || '',
  libraryId:'',
  userName:'',
  contactNo:''
})



useEffect(() => {
      bookRef.current.focus();
},[])

const rentHandle = () => {

  if(props.method==="post"){
    axios.post("http://localhost:3001/rented/rentBook/"+props.data._id,form,{
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://localhost:3000"
      }
    })
    .then((res)=>{
      console.log(res.data);
      if(res.data.message==="Book rented"){
      alert(res.data.message);
      window.location.reload(false)  
      }else{
        alert("Renting request failed")
      }
    })
    .catch((error)=>{
      console.error('Error during POST request', error);
    })
  }
}
  return (
    <div>
        <Sidebar/>

        <div className='App'>
    <br/>

    <Typography variant='h3' className='head2' >Rent Book</Typography>
    <br></br>
    <div className='styleform'>
  
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6}>
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
        <Grid item xs={12} sm={6} md={6}>
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
        <TextField 
        variant='standard' 
        fullWidth 
        label='Book Address' 
        required 
        type='text'
        onChange={(e) => {
        setForm({...form,image:e.target.value})}}
        value={form.image}
        />
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
    </div>
  )
}


export default Rentbook