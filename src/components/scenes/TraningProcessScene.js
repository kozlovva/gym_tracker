import { Box, Checkbox, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, TextField, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetExerciseById } from '../../api/ExercisesAPI';
import AddSetButton from '../base/AddSetButton';
import SetsTable from '../program/SetsTable';
import { GetWorkoutById } from '../service/WorkoutService';

const WorkoutProcessScene = (props) => {
    const { workoutId } = useParams();
    const theme = useTheme();
    const [workout, updateWorkout] = useState({ exercises: [] });
    useEffect(() => {
        let result = GetWorkoutById(workoutId)
        updateWorkout(result)
    }, [workoutId])

    const handleChangeInput = (e, exercise, index) => {
        let target = getTargetExerciseById(exercise.id)
        let newValue = e.target.value == "" ? "" : parseInt(e.target.value);
        target.sets[index][e.target.name] = newValue
        updateWorkoutFilling(target)
    }

    const handleChangeCompleted = (e, exercise, index) => {
        let target = getTargetExerciseById(exercise.id)
        target.sets[index].completed = !target.sets[index].completed;
        updateWorkoutFilling(target)
    }

    const getTargetExerciseById = id => {
        return workout.exercises.find(e => e.id == id);
    }

    const updateWorkoutFilling = (target) => {
        updateWorkout({
            ...workout, exercises: workout.exercises.map(e => {
                return e.id == target.id ? target : e;
            })
        })
    }

    const addSet = (exercise) => {
        let target = getTargetExerciseById(exercise.id);
        target.sets.push({
            repeats: 10,
            wieght: 0,
            completed: false
        });
        updateWorkoutFilling(target)
    }

    return <Box sx={{
        height: "100%", overflow: "scroll"
    }}>
        <Grid container spacing={2}>
            {workout.exercises.map((exercise, idx) => {
                const item = GetExerciseById(exercise.id);
                return <Grid item xs={12} key={idx}>
                    <SetsTable
                        item={item}
                        sets={exercise.sets}
                        handleChangeCompleted={handleChangeCompleted}
                        handleChangeInput={handleChangeInput}
                        addSet={addSet}/>
                </Grid>
            })}
        </Grid>
    </Box>
}

export default WorkoutProcessScene;