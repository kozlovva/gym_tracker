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
import { DefaultExercises, DefaultTraningPrograms, ExercisesGrouped } from "./components/Constants";
import TraningProgramScene from "./components/scenes/TraningProgramScene";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#EAE1DF",
      light: "#f7f3f3",
      dark: "#be9d9d",
      contrastText: "#322E18"
    },
    secondary: {
      main: "#545E56",
      light: "#EAECEA",
      dark: "#A9B1A9"
    },
    background: {
      default: "#f7f3f3"
    }
  },
  shape: {
    borderRadius: '8px'
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});

const initExercises = () => {
  if(localStorage.getItem("exercises") == null)
    localStorage.setItem("exercises", JSON.stringify(DefaultExercises))
  if(localStorage.getItem("traning_programs") == null)
    localStorage.setItem("traning_programs", JSON.stringify(DefaultTraningPrograms))
}

function App() {

  initExercises();

  const [scene, setScene] = useState("program")

  const handleChange = (event, newValue) => {
    setScene(newValue);
  };

  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center', pb: 7}}>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <Box component={"main"} sx={{ p: 1, width: '100%' , height: '100%', overflowY: "scroll", pb: 10}}>
          {scene == "exercise" && <ExercisesScene />}
          {scene == "traning" && <TraningScene />}
          {scene == "program" && <TraningProgramScene />}
          <Navigation activeScene={scene} handleChange={handleChange}/>
        </Box>
      </ThemeProvider>
    </Box>

  );
}

export default App;
