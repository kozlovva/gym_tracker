import React from "react";
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { DefaultExercises, DefaultTraningPrograms } from "./components/Constants";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import TraningScene from "./components/scenes/TraningScene";
import ExercisesScene from "./components/scenes/ExercisesScene";
import TraningProgramScene from "./components/scenes/TraningProgramScene";
import Layout from "./components/base/Layout";
import TraningProcessScene from "./components/scenes/TraningProcessScene";

const initExercises = () => {
  if (localStorage.getItem("exercises") == null)
    localStorage.setItem("exercises", JSON.stringify(DefaultExercises))
  if (localStorage.getItem("traning_programs") == null)
    localStorage.setItem("traning_programs", JSON.stringify(DefaultTraningPrograms))
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<TraningScene />} />
      <Route path="exercises" element={<ExercisesScene />} />
      <Route path="traning-programs" element={<TraningProgramScene />} />
      <Route path="traning" element={<TraningScene />} />
      <Route path="workout-process/:workoutId" element={<TraningProcessScene />} />
    </Route>
  )
);

const App = () => {
  initExercises();
  return (<RouterProvider router={router} />);
}

export default App;