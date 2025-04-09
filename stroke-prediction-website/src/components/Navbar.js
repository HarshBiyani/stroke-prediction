import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ background: '#2C3E50' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Stroke Prediction
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/stroke-prediction">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/dataset">Dataset</Button>
          <Button color="inherit" component={Link} to="/predict">Try It</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
