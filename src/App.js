import React, { useState } from "react";
import './App.css';
import { AppBar, Box, Toolbar } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ExercisesScene from "./components/scenes/ExercisesScene";
import TraningScene from "./components/scenes/TraningScene";
import Navigation from "./components/base/Navigation";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#CFCCD6",
      light: "#F4F4F6",
      dark: "#A5A5B6"
    },
    secondary: {
      main: "#B7B5E4",
      light: "#E2E1F4",
      dark: "#9A97D8"
    }
  },
  shape: {
    borderRadius: '8px'
  }
});

function App() {

  const [scene, setScene] = useState("exercise")

  const handleChange = (event, newValue) => {
    setScene(newValue);
  };

  const theme = useTheme();
  console.log("Theme", theme);

  return (
    <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center', pb: 7, pt: 8 }}>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <AppBar component={"nav"} position="fixed">
          <Toolbar></Toolbar>
        </AppBar>
        <Box component={"main"} sx={{ p: 1, width: '100%' }}>
          {scene == "exercise" && <ExercisesScene />}
          {scene == "traning" && <TraningScene />}
          <Navigation activeScene={scene} handleChange={handleChange}/>
        </Box>
      </ThemeProvider>
    </Box>

  );
}

export default App;
