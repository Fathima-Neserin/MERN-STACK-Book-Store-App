import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Sidebar from './Sidebar'
import axios from "axios";
import { Button, Divider, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Rentbook from "./Rentbook";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Review from './Review';




const Rentedbooks = () => {
   
  const [review, setReview] =useState(false);
  const [singleValue,setSingleValue] = useState([]);

   const [rented,setRented] = useState([]);

   
  const [expanded, setExpanded] = React.useState(false);



  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


   useEffect(()=>{
       axios.get('http://localhost:3001/ReNtEd').then((res)=>{
        console.log("Rented Data:", rented);

         setRented(res.data);
       })
   },[])

   const reviewBook = (val) => {
    console.log("review clicked",val);
    setReview(true);
    setSingleValue(val);
 
  }

  let finalJSX=(
    
  
    <div className="card2-margin">
      <Grid container >
      {rented.map((val,i)=>(
        <Grid item key={i} md={2}>
      <Card key={i} sx={{ width: '95%' }} className="card">
       
      <CardMedia 
       component="img"
        sx={{ height: '100%' }}
        image={val.image}
      />
       <CardContent> 
      <div style={{ overflow: 'hidden' }}>
        
        <div>
        <Accordion expanded={expanded === `panel1${i}`} onChange={handleChange(`panel1${i}`)} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          >
        
           <Typography>Reviews</Typography>
         </AccordionSummary>
         <AccordionDetails>
          
          <div>
       { val.reviews && val.reviews.map((review, index) => (
        <div key={index} >
       <div>
          <span><h5>{review.email}</h5></span>
        </div><br/>
        <div>{review.reviewText}</div>
        <Divider/>
       
      </div>
      
    ))}
  
  </div>
  

        </AccordionDetails>
      </Accordion>
     
       </div>
       <br/>
       <br/>
     
        <Button id='btn1'  onClick={() => reviewBook(val)}>Add Review</Button>
       </div>
      </CardContent>
      
    </Card>
    </Grid>
    
    ))}
    </Grid>
  
     </div>
     
  )
  if(review) finalJSX= <Review method="put" data={singleValue}/>
  return(


    finalJSX


  )
}

export default Rentedbooks