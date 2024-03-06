import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Sidebar from './Sidebar'
import axios from "axios";
import { Divider, Grid } from "@mui/material";
import { Link } from "react-router-dom";
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
    axios.get('http://localhost:3001/books').then((res) => {
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
        <Typography>
          <b>"Welcome </b> to our Book Store App – your literary sanctuary in the digital realm!<br/> Immerse yourself in a world of captivating stories, explore diverse genres, and embark on literary journeys that transcend pages. Discover, read, and share your favorite tales seamlessly.<br/> Happy reading!"
        </Typography>
      </div >
      <div className="card-margin">
      <Grid container >
      {bookdata.map((val,i)=>(
        <Grid item key={i} md={3}>
      <Card key={i} sx={{ width: '75%' }} className="card">
       
      <CardMedia 
       component="img"
        sx={{ height: '30%' }}
        image={val.image}
      />
      <div className="card-content">
      <CardContent> 
        <Typography gutterBottom variant="h6" component="div">
          Name : {val.title}
        </Typography>
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
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}  sx={{ backgroundColor: ' rgba(226, 252, 252, 0.911)'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          >
        
           <Typography>Reviews</Typography>
         </AccordionSummary>
         <AccordionDetails>
          
          <div>
    {val.reviews.map((review, index) => (
      <div key={index} className="review-container">
        <div className="profile-info">
          <br/>
          <img src={review.profilePicture} alt="Profile" className="profiles" />
          <br/>
          <span>{review.email}</span>
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
      <CardActions>
       <Button id="btn1"onClick={()=>rentBook(val)} >Rent</Button>
      </CardActions>
      
      </div>
      
    </Card>
    </Grid>
    
    
    ))}
    </Grid>
    </div>
    </>
  );
  if(rent) finalJSX= <Rentbook method="post" data={singleValue}/>
  return(


    finalJSX


  )
}

export default Dashboard;
