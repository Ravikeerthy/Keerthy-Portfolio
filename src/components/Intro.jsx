import { Button, Container, Typography } from "@mui/material";
import React from "react";

const Intro = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>
        Hi, I'm Keerthana Ravi
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Aspiring Full-Stack Developer
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 4 }}>
        View My Projects
      </Button>
    </Container>
  );
};

export default Intro;
