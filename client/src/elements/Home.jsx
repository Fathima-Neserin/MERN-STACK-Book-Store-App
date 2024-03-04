import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import axios from 'axios';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';


const Home = () => {
    const [book,setBook] = useState([]);

useEffect(()=>{
    axios.get('http://localhost:3001/books').then((res)=>{
      console.log(res.data);
      setBook(...book,res.data);
    })
},[])

  return (
    <div className='App'>
    <div  id='heading'>
  <Typography>"Welcome to our book lover's haven!<br/> Explore a world of literary wonders with our diverse collection of books. From bestsellers to hidden gems, our app offers a curated selection to satisfy every reading palate. Immerse yourself in the joy of discovery, where each click opens the door to new adventures. Your perfect read awaits at your fingertips."
</Typography>
</div>
<Typography variant='h3' className='head5' >Latest Collections</Typography>
<br/>


<Box>
  
  <div id='imglist' className='custom-imglist'>
    
<ImageList cols={5}  >
{book.map((val,i) => (
  
  
<Link id='imglist' key={i} className='img-link' to={`/unique/${val._id}`}>
  <ImageListItem key={i}  ><br/>
    
    <img
      src={`${val.image}`}
      loading="lazy"
    />
    
    <ImageListItemBar
      subtitle={<span>by: {val.author}</span>}
      
    />
    
  </ImageListItem>
  </Link>
  
  
))}
</ImageList> 

</div>
</Box>
</div>
  )
}

export default Home