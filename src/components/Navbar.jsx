import React from 'react'
import {AppBar, Toolbar }from '@mui/material';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import { IconButton } from '@material-ui/core';
import {grey} from '@mui/material/colors';
function Navbar() {

  const grey = grey[900];
  
  return (
    <AppBar position="static" color="grey">
        <Toolbar>
            <IconButton edge="start" aria-label="logo" size="large">
                <CoronavirusIcon color="primary" />
            </IconButton>
            
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;