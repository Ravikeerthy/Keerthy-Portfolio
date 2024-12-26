import { Grid2 } from "@mui/material";
import React from "react";
import Menu from "./components/Menu";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Grid2>
     <Menu />
     <Intro />
     <About />
     <Projects />
     <Contact />
    </Grid2>
  );
};

export default App;
