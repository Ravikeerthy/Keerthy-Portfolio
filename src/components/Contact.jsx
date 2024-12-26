import { Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
    <Typography variant="h4" gutterBottom>
      Contact Me
    </Typography>
    <form>
      <TextField
        fullWidth
        label="Your Name"
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Your Email"
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Your Message"
        multiline
        rows={4}
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" type="submit">
        Send
      </Button>
    </form>
  </Container>
  
  )
}

export default Contact
