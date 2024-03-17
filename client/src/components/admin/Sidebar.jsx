import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import '../../index.css'
import { Link, useNavigate } from 'react-router-dom';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import BookmarkAddOutlined from '@mui/icons-material/BookmarkAddOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import { Divider, ListItemIcon } from '@mui/material';


const drawerWidth = 200;

function Sidebar() {

  const navigate = useNavigate();

  const listData = [{
    page:'Dashboard',
    link:'/admindash',
    icon:<HomeOutlined/>
   },
   { 
    page:'New Book',
    link:'/new',
    icon:<BookmarkAddOutlined/>
  },
  {
   page:'Users',
   link:'/Users',
   icon:<PeopleOutlinedIcon/>
  },
  {
    page: 'Logout',
     link: '/login',
     icon:<LogoutOutlined/>
  }];
  
const handleLogout = () => {
  
  sessionStorage.removeItem('Token');
  sessionStorage.removeItem('ID');
  sessionStorage.removeItem('username');
  // Redirect to login page
    navigate('/login');

}

  const drawer = (
    <div className='drawer'>
      <img src='https://img.freepik.com/free-vector/flat-design-library-logo-template_23-2149325326.jpg' className='img3'/>
  
      <Toolbar/>
      <List>
        
        {listData.map((val, i) => (
          
          <ListItem key={i} >
            <Link to={val.link} className='side-link' >
            <ListItemButton className='side-text' onClick={val.page === 'Logout' ? handleLogout : null}>
            <ListItemIcon>{val.icon}</ListItemIcon>

              <ListItemText primary={val.page} />
              
            </ListItemButton>
            <Divider style={ {minWidth: "100%"}} />
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
)}
export default Sidebar;