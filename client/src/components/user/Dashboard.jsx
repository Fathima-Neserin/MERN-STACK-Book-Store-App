import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Sidebar from './Sidebar'
import axios from "axios";
import { Divider, Grid } from "@mui/material";
import Rentbook from "./Rentbook";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Dashboard = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [bookdata, setBook] = useState([]);
  
  const [rent, setRent] =useState(false);
  const [singleValue,setSingleValue] = useState([]);

  useEffect(() => {
    axios.get('/books').then((res) => {
      setBook(res.data);
    });
  }, []);
 
 const rentBook = (val) => {
   console.log("rent clicked",val);
   setRent(true);
   setSingleValue(val);

 }

  let finalJSX = (
    <>
      <Sidebar />

      <div id="welcome">
        <div></div>
        <Typography>
          <b>"Welcome </b> to our Book Store App – your literary sanctuary in the digital realm!<br/> Immerse yourself in a world of captivating stories, explore diverse genres, and embark on literary journeys that transcend pages. Discover, read, and share your favorite tales seamlessly.<br/> Happy reading!"
        </Typography>
      </div >
      <div className="card-margin">
      <Grid container >
      {bookdata.map((val,i)=>(
        <Grid item key={i} md={3}>
      <Card key={i} sx={{ width: '75%' , height:'100%' }}>

       <Button onClick={()=>rentBook(val)} >
      <CardMedia 
       component="img"
        sx={{ height: '45vh' , width: "90%" }}
        image={val.image}
      />
      </Button>
      <div className="card-content">
      <CardContent> 
      <div style={{ maxHeight: '10em', overflow: 'hidden' }}>
        <Typography gutterBottom variant="h6" component="div" >
          Name : {val.title}
        </Typography>
        </div><br/>
        <Typography>
          Author : {val.author}
        </Typography><br/>
        <Typography >
          Genre : {val.genre}
        </Typography><br/>
       
        <Typography >
          Status : {val.status}
        </Typography><br/>
        <Typography>
          Pay(late fee) : {val.pay}
        </Typography><br/>
        <div>
        <Accordion expanded={expanded === `panel1${i}`} onChange={handleChange(`panel1${i}`)} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          >
        
           <Typography>Reviews</Typography>
         </AccordionSummary>
         <AccordionDetails>
          
          <div>
    {val.reviews.map((review, index) => (
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
      </CardContent>
      
      </div>
      
    </Card>
    </Grid>
    
    
    ))}
    </Grid>
    </div>
    <br/>
    </>
  );
  if(rent) finalJSX= <Rentbook method="post" data={singleValue}/>
  return(


    finalJSX


  )}
export default Dashboard;
