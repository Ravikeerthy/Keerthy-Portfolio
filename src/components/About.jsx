import { Container, Paper, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
          I'm a passionate full-stack developer who loves building interactive
          web applications. I have experience with React, Node.js, MongoDB, and
          more.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
