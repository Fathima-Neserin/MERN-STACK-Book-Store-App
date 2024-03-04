import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
import Sidebar from './Sidebar'
import { Grid } from '@mui/material';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';


const Rentedbooks = () => {
   
   const [rented,setRented] = useState([]);

   useEffect(()=>{
       axios.get('http://localhost:3001/rented').then((res)=>{
         setRented(res.data);
       })
   },[])

  return (
    <>
    <div>
        <Sidebar/>
    </div>
    <div className="card-margin">
      <Grid container >
      {rented.map((val,i)=>(
        <Grid item key={i} md={3}>
      <Card key={i} sx={{ width: '75%' }} className="card">
       
      <CardMedia 
       component="img"
        sx={{ height: '30%' }}
        image={val.image}
      />
     
      
    </Card>
    </Grid>
    
    ))}
    </Grid>
    </div>
     </>
     
  )
}

export default Rentedbooks