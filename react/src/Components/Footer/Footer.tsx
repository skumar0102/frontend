import React,{useEffect} from 'react';
import {Box,
Paper,
BottomNavigation,
BottomNavigationAction
} from '@mui/material'

function Footer() {


  return (
    <>

        <Box >
        <Paper  sx={{ position: 'fixed', bottom: 0, left: 0, right: 0,zIndex:3 }} elevation={3}>
        <BottomNavigation
          sx={{backgroundColor:'black'}}
        >
          <ul>
              <li style={{color:'white'}}>All Rights Reserved. Designed, Developed and Powered by IDS.</li>
          </ul>
        </BottomNavigation>
      </Paper>
    </Box>

    </>
  )
}

export default Footer