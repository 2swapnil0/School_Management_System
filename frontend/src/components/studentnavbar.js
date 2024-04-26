import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ModalClose from '@mui/material/IconButton';
import Search from '@mui/icons-material/Search';

const Sidebar = ({ open, onClose }) => (
  <Drawer
    open={open}
    onClose={onClose}
    sx={{
      '& .MuiDrawer-paper': {
        width: '240px', // Adjust width as needed
      },
    }}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        ml: 'auto',
        mt: 1,
        mr: 2,
      }}
    >
      <Typography
        component="label"
        htmlFor="close-icon"
        fontSize="sm"
        fontWeight="lg"
        sx={{ cursor: 'pointer' }}
      >
        Close
      </Typography>
      <ModalClose id="close-icon" sx={{ position: 'initial' }} onClick={onClose} />
    </Box>
    <List
      size="lg"
      component="nav"
      sx={{
        flex: 'none',
        fontSize: 'xl',
        '& > div': { justifyContent: 'center' },
      }}
    >
      <ListItemButton sx={{ fontWeight: 'lg' }} component={Link} to="/studentdashboard">
        Home
      </ListItemButton>
      <ListItemButton component={Link} to="/viewclassstudent">
        classes
      </ListItemButton>
      <ListItemButton component={Link} to="/viewassignment">
        Assignments
      </ListItemButton>
      
      
    </List>
  </Drawer>
);

const Navbar = () => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate(); // Use useNavigate hook to navigate to different pages

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAuth(false); // Set auth state to false
    setAnchorEl(null);
    localStorage.removeItem('studentToken'); // Clear token from local storage
    navigate('/'); // Redirect to the homepage
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student Dashboard
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
    </Box>
  );
};

export default Navbar;
