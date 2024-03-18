import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import {  Typography } from '@mui/material'
import '../index.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Unique = () => {

const [details,setDetails] = useState({});
const {id} = useParams();

useEffect(()=>{

    axios.get(`/books/${id}`).then((res)=>{
      console.log(res.data);
      setDetails(res.data)
    })

},[id])

  return (
    <>
    
    <div className='unique-container'>
    <img src={details.image} className='img2' />
    <div className='details' id='title'>
    <Typography variant='h4'  >{details.title}</Typography>
    <br/>
    <Typography  variant='h6'>Author:{details.author}</Typography><br/>
    <Typography  variant='h6'>Publication year:{details.publication_year}</Typography><br/>
    <Typography  variant='h6'>Genre:{details.genre}</Typography><br/>
    <Typography  variant='h6'>ISBN number:{details.ISBN_number}</Typography><br/>
    </div>
    <div >
        
        <Navbar/>
        
        </div>
        </div>
        </>
)}
export default Unique
