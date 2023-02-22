import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetExerciseById } from '../../api/ExercisesAPI';
import MainButton from '../base/MainButton';
import SetsTable from '../program/SetsTable';
import { CompleteWorkout, GetWorkoutById, StartWorkout } from '../service/WorkoutService';

const WorkoutProcessScene = (props) => {
    const { workoutId } = useParams();
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

    const startWorkout = () => {
        updateWorkoutFilling(StartWorkout(workout))  
    }

    const completeWorkout = () => {
        updateWorkoutFilling(CompleteWorkout(workout));
    }

    const isNew = () => {
        return workout.status == "NEW";
    }

    const isActive = () => {
        return workout.status == "ACTIVE";
    }

    const isCompleted = () => {
        return workout.status == "COMPLETED";
    }

    return <Box sx={{
        height: "100%", overflow: "scroll"
    }}>
        <Grid container spacing={2}>
            {workout.exercises.map((exercise, idx) => {
                const item = GetExerciseById(exercise.id);
                return <Grid item xs={12} key={idx}>
                    <SetsTable
                        infoMode={isCompleted() || isNew()}
                        inputMode={isActive()}
                        item={item}
                        sets={exercise.sets}
                        handleChangeCompleted={handleChangeCompleted}
                        handleChangeInput={handleChangeInput}
                        addSet={addSet} />
                </Grid>
            })}
        </Grid>

        {isNew() && <MainButton
            text={"Go!"}
            onClick={startWorkout}
            sx={{
                backgroundColor: "#FBAB7E",
                backgroundImage: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
                color: 'black'
            }} />}
        {isActive() && <MainButton
            text={"Завершить"}
            onClick={completeWorkout}
            sx={{
                backgroundColor: "#FBAB7E",
                backgroundImage: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
                color: 'black'
            }} />}

    </Box>
}

export default WorkoutProcessScene;