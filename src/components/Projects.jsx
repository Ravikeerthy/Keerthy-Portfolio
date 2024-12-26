import {  Button, CardActions, Container, Grid2, Typography } from '@mui/material'
import React from 'react'

const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
    <Typography variant="h4" gutterBottom>
      Projects
    </Typography>
    <Grid2 container spacing={4}>
    <CardActions>
            <Button size="small">
              Live Demo
            </Button>
            <Button size="small">
              GitHub
            </Button>
          </CardActions>
     
    </Grid2>
  </Container>
  
  )
}

export default Projects
