import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { Button, Divider, Grid } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Review from './Review';


const Rentedbooks = () => {
   
  const [review, setReview] =useState(false);
  const [singleValue,setSingleValue] = useState([]);

   const [rented,setRented] = useState([]);
   
  const [expanded, setExpanded] = React.useState(false);

 const userName = sessionStorage.getItem('username');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

   useEffect(()=>{
       axios.get(`/ReNtEd/${userName}`).then((res)=>{
        console.log("Rented Data:", rented);
        console.log('Response from server:', res.data);

         setRented(res.data);
       })
   },[])

   const reviewBook = (val) => {
    console.log("review clicked",val);
    setReview(true);
    setSingleValue(val);
  }

  let finalJSX=(
    <>
  
    <div className="card2-margin">
      <Grid container >
      {rented.map((val,i)=>(
        <Grid item key={i} md={2}>
      <Card  sx={{ width: '95%' }} className="card">
       
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
     </>
     
  )
  if(review) finalJSX= <Review method="put" data={singleValue}/>
  return(


    finalJSX


  )}
export default Rentedbooks