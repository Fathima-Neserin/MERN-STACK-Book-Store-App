import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../../index.css'
import { Link } from 'react-router-dom';



const drawerWidth = 200;

function Sidebar() {
  const listData = [{
    page:'Dashboard',
    link:'/userdash'
   },
   { 
    page:'Rent Book',
    link:'/rent'
  },
  {
   page:'Rented Books',
   link:'/Rented'
  },
   {
    page: 'Profile',
    link:'/profile'
    },
    {
    page: 'Logout',
    link: '/login'
}];
  


 

  const drawer = (
    <div className='drawer'>
      <img src='https://static.vecteezy.com/system/resources/thumbnails/008/147/482/small/modern-bookstore-logo-design-illustration-vector.jpg' className='img3'/>
  
      <Toolbar/>
      <List>
        
        {listData.map((val, i) => (
          
          <ListItem key={i} >
            <Link to={val.link} className='side-link' >
            <ListItemButton className='side-text'>
              <ListItemText primary={val.page} />
              
            </ListItemButton>
            <Divider style={{lineHeight:'100%'}}/>
            </Link>
          </ListItem>
        
        ))}
      </List>
      
      
     
    </div>
  );

  

  return (
    <div className='container'>
    
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          open
          className='drawer'
        >
          {drawer}
        </Drawer>
        </Box>
        
        </div>
      
  )
        }
        
       

export default Sidebar;