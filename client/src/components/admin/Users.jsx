import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';
import { log } from 'util';

const Users = () => {

    const [user,setUser] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/user').then((res)=>{
          console.log("Backend response:",res.data)
          // Filter users with role "User" 
        const filteredUsers = res.data.filter(user => user.role[0] === "User");
        console.log("Filtered Users:",filteredUsers);
            setUser(filteredUsers)
        })
    },[])

    function deleteUser(id){
        axios.delete('http://localhost:3001/user/removeUser/'+id).then((res)=>{
            alert(res.data.message)
            window.location.reload(false);
        })
    }

  return (
    <>
    <div className='users-container'>
        <Grid container spacing={1}>
    {user.map((val,i)=>(
        <Grid key={i} item xs={12} sm={6} md={3}>
    <Card key={i} sx={{ width: 280 , height:500 }}>
     
  <CardMedia
    sx={{ height: 220 }}
    image="https://i.pinimg.com/originals/ac/11/aa/ac11aa2add3b0193c8769e0a17d13535.jpg"
    
  />
  <CardContent>
    <Typography gutterBottom variant="h5">
      Name : {val.person}
    </Typography>
    <br/>
    <Typography >
      Email : {val.email}
    </Typography>
    <br/>
    <Typography >
      Mobile Number : {val.contact}
    </Typography>
    <br/>
    <Typography >
      Username : {val.username}
    </Typography>
    
   
  </CardContent>
  <CardActions>
    <Button  id='btn' onClick={()=>{deleteUser((val._id))}}>Delete</Button>
  </CardActions>
  
</Card>
</Grid>
    ))}
</Grid>
    </div>
    </>
)
  
}

export default Users