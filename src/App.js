import React, { useState } from "react";
import './App.css';
import { AppBar, BottomNavigation, BottomNavigationAction, Box, Drawer, Grid, Paper, Toolbar } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from "@mui/system";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FitbitIcon from '@mui/icons-material/Fitbit';
import ExercisesScene from "./components/scenes/ExercisesScene";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const [scene, setScene] = useState("traning")

  const handleChange = (event, newValue) => {
    setScene(newValue);
  };

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppBar component={"nav"} position="fixed">
          <Toolbar></Toolbar>
        </AppBar>
        <Box component={"main"} sx={{ p: 3 }}>
          <Container>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                {scene == "exercise" && <ExercisesScene />}
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                  <BottomNavigation value={scene} onChange={handleChange} showLabels>
                    <BottomNavigationAction value="traning" label="Тренировки" icon={<FitnessCenterIcon />} />
                    <BottomNavigationAction value="exercise" label="Упражнения" icon={<FitbitIcon />} />
                  </BottomNavigation>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    </div>

  );
}

export default App;
