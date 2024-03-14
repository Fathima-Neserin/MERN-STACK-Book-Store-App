import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';




const Navbar = () => {
  return (
    <Box>
    <AppBar id='navbar'>
         
        <Toolbar>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpP-Mao5HTWUpOoOufeh-LzT8P_4GZN3n_j4OcGeCIQQ&s' className='img1'/>
          
          <Typography variant="h4" id='head'>
            Book Store App
          </Typography>
          <div className='header'>
          <Button><Link to={'/'} className='link' >Home</Link></Button>
          <Button><Link to={'/signup'} className='link' >Signup</Link></Button>
          <Button><Link to={'/login'} className='link' >Login</Link></Button>
          </div>
        </Toolbar>
      
    </AppBar>
  
</Box>
  )
}

export default Navbar