import React from 'react'
import  { useEffect, useRef, useState } from 'react'
import { Typography , Grid, TextField , Button} from '@mui/material'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


const Newbook = () => {

 const navigate = useNavigate();  
    
 const titleRef= useRef('');

 const [form,setForm]=useState({
  title: '',
  author: '',
  image: '',
  genre:'',
  languages:'',
  rental_period:'',
  description:'',
  status:'',
  ISBN_number:'',
  publication_year:''
})

useEffect(() => {
    titleRef.current.focus();
},[])


const bookAddition = async(e) =>{
    e.preventDefault();
     
    try {
        const response = await axios.post('/books/addBook',form)
        if(response.data.message===`New book ${form.title} added`){
            alert(response.data.message)
            navigate('/admindash')
        }else{
            alert('Error occured',response.data.message)
        }
    } catch (error) {
        console.error(error)
        if (error.response) {
          console.error(error.response.data); 
      }}}

  return (
    <div className='newbook-container'>
    <div className='App'>
      
    <Typography variant='h3' className='head5' >New Book</Typography>
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
         inputRef={titleRef}
        />
        </Grid>
        <br/>
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
       </Grid>
       <br/>
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
       <br/>
        </Grid>  
        <Grid item xs={12} sm={12} md={12}>
        <TextField 
        variant='standard' 
        fullWidth 
        label='Genre' 
        required 
        type='text'
        onChange={(e) => {
          setForm({...form,genre:e.target.value})
        }}
        value={form.genre}
        />
        </Grid>
        <br/>
        <Grid item xs={12} sm={12} md={12}>
        <TextField 
        variant='standard' 
        fullWidth
        label='Languages'
        required 
        type='text'
        onChange={(e) => {
          setForm({...form,languages:e.target.value})
        }}
        value={form.languages}
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
        label='Description' 
        required 
        type='text'
        onChange={(e) => {
          setForm({...form,description:e.target.value})
        }}
        value={form.description}
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
        <TextField 
        variant='standard' 
        fullWidth 
        label='ISBN Number' 
        required 
        type='text'
        onChange={(e) => {
          setForm({...form,ISBN_number:e.target.value})
        }}
        value={form.ISBN_number}
        />
        </Grid>
        <br/>
        <Grid item xs={12} sm={12} md={12}>
        <TextField 
        variant='standard' 
        fullWidth 
        label='Publication Year' 
        required 
        type='text'
        onChange={(e) => {
          setForm({...form,publication_year:e.target.value})
        }}
        value={form.publication_year}
        />
        </Grid>
        <br/>
        <Grid item xs={12} sm={12} md={12}>
        <Button variant='standard' id='btn' onClick={bookAddition} size='large'>Add</Button>
        </Grid>  
        <br/>
          </div>
          </div>
          </div>
)}
export default Newbook