import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Menu = () => {
  return (
   <AppBar position='static'>
        <Toolbar>
            <Typography variant='h5' component="div" sx={{flexGrow:1}}>
                Keerthana Ravi
            </Typography>
           <Button color='inherit'>About</Button>
           <Button color='inherit'>Projects</Button>
           <Button color='inherit'>Contact</Button>
        </Toolbar>
   </AppBar>
  )
}

export default Menu
