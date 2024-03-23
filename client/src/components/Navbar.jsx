import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
// import PersonIcon from '@mui/icons-material/Person';
import Logo from '../assets/images/logo-bg.png';
import '../styles/navbar.css';

function Navbar() {
  // const userDataString = localStorage.getItem('userData');
  // const userData = JSON.parse(userDataString);
  // const userName = userData.userName;

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <React.Fragment>
      <AppBar position='absolute' className='navbar-container'>
        <Toolbar>
          <img src={Logo} alt="Hero Background" className='logo'/>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}> </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} alignItems="center">
            <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
              <NavLink to="/home" className='nav-link' activeClassName='active-link'>
                <Button className='btn' color='inherit'>Home</Button>
              </NavLink>
              <NavLink to="/find-doctor" className='nav-link' activeClassName='active-link'>
                <Button className='btn' color='inherit'>Find a doctor</Button>
              </NavLink> 
              <NavLink to="/patients-visitors" className='nav-link' activeClassName='active-link'>
                <Button className='btn' color='inherit'>Patients & visitors</Button>
              </NavLink>
              <NavLink to="/contact" className='nav-link' activeClassName='active-link'>
                <Button className='btn' color='inherit'>Contact us</Button>
              </NavLink>
            </Stack>
            <IconButton
              size='medium'
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={handleDrawerOpen}
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={openDrawer} onClose={handleDrawerClose}>
        <List className="drawer-list">
          <ListItem button onClick={handleDrawerClose}>
            <NavLink to="/home" className='nav-link' activeClassName='active-link'>
              <ListItemText primary="Home" />
            </NavLink>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <NavLink to="/find-doctor" className='nav-link' activeClassName='active-link'>
              <ListItemText primary="Find a doctor" />
            </NavLink>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <NavLink to="/patients-visitors" className='nav-link' activeClassName='active-link'>
              <ListItemText primary="Patients & visitors" />
            </NavLink>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <NavLink to="/contact" className='nav-link' activeClassName='active-link'>
              <ListItemText primary="Contact us" />
            </NavLink>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default Navbar
