import React , { useState , useEffect } from 'react'
import Sidebar from './Sidebar'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { Divider, Grid } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Editbook from './Editbook';


const Admindash = () => {

  const [update, setUpdate] =useState(false);
  const [singleValue,setSingleValue] = useState([]);

  
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [bookdata, setBook] = useState([]);

  useEffect(() => {
    axios.get('/books').then((res) => {
      setBook(res.data);
    });
  }, []);

  const updateBook = (val) =>{
    console.log("update clicked",val);
    setUpdate(true);
    setSingleValue(val);
 }
  
 function deleteBook(id){
   axios.delete('/books/removeBook/'+id).then((res)=>{
   alert(res.data.message)
    window.location.reload(false);
   })
 }

  let finalJSX =  (
    <>
    <div>
        <Sidebar/>
    </div>
    <div className="card-margin-admin">
    <Grid container spacing={3}>    {bookdata.map((val,i)=>(
      <Grid item key={i} md={3}>
    <Card key={i} sx={{ width: '68%' , height:'100%' }}>

     
    <CardMedia 
     component="img"
      sx={{ height: '48vh' , width: "100%" }}
      image={val.image}
    />
    
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
        Category : {val.genre}
      </Typography><br/>
     
      <Typography >
        Status : {val.status}
      </Typography><br/>
      <Typography>
        Rented Count : {val.rented_count}
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
    <br/><br/>
    <Button id='btn' className='btns' size='medium' onClick={()=>updateBook((val))}>Update</Button> 
    <span style={{ marginRight: '10px' }}></span>
    <Button id='btn' className='btns' size='medium' onClick={()=>{deleteBook((val._id))}}>Delete</Button> 
    </div>
    </CardContent>
    </div>
  </Card>
  </Grid>
  ))}
  </Grid>
  </div>
  </>
  )
  if(update) finalJSX= <Editbook method="put" data={singleValue}/>
  return(


    finalJSX


  )
}

export default Admindash