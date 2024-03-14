import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Editprofile from './Editprofile';


const  Profile = () => {

  const [update, setUpdate] =useState(false);
  const [singleValue,setSingleValue] = useState([]);


  const [user,setUser] = useState({});
  const id = sessionStorage.getItem('ID');

  useEffect(()=>{

    axios.get(`http://localhost:3001/user/${id}`).then((res)=>{
      console.log(res.data);
      setUser(res.data);
    })
    .catch((error) => {
      console.error('Error fetching user data:', error);
    });
  },[id])

  
  const updateProfile = (val) => {
    console.log("update clicked",val);
    setUpdate(true);
    setSingleValue(val);
 
  }

  let finalJSX = (
    <>
    
        <div className='profile'>
        <Card sx={{ width: 350 }}>
          
      <CardMedia
        sx={{ height: 320 }}
        image="https://i.pinimg.com/originals/ac/11/aa/ac11aa2add3b0193c8769e0a17d13535.jpg"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          Name : {user.person}
        </Typography>
        <br/>
        <Typography >
          Email : {user.email}
        </Typography>
        <br/>
        <Typography >
          Mobile Number : {user.contact}
        </Typography>
        <br/>
        <Typography >
          Username : {user.username}
        </Typography>
        <br/>
       
      </CardContent>
      <CardActions>
        <Button  id='btn1'  onClick={() => updateProfile(user)}>Edit your profile</Button>
      </CardActions>
    </Card>
        </div>
        </>
  )
  if(update) finalJSX= <Editprofile method="put" data={singleValue}/>
  return(


    finalJSX


  )
}

export default Profile;