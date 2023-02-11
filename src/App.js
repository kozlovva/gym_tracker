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
      dark: "#A5A5B6",
      contrastText: "#322E18"
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

  return (
    <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center', pb: 7 }}>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <Box component={"main"} sx={{ p: 1, width: '100%' , height: '100%', overflowY: "scroll", pb: 10}}>
          {scene == "exercise" && <ExercisesScene />}
          {scene == "traning" && <TraningScene />}
          <Navigation activeScene={scene} handleChange={handleChange}/>
        </Box>
      </ThemeProvider>
    </Box>

  );
}

export default App;
