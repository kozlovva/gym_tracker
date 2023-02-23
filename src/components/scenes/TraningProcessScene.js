import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetExerciseById } from '../../api/ExercisesAPI';
import MainButton from '../base/MainButton';
import Modal from '../base/Modal';
import { DefaultSet, GenerateProgramExercise } from '../Constants';
import ExercisesSelector from '../exercise/ExercisesSelector';
import SetsTable from '../program/SetsTable';
import { CompleteWorkout, GetWorkoutById, IsActive, IsCompleted, IsNew, SaveWorkout, StartWorkout } from '../service/WorkoutService';

const WorkoutProcessScene = (props) => {
    const { workoutId } = useParams();

    const [selected, setSelected] = useState([]);
    const [isOpen, setOpen] = useState(false)
    const [workout, updateWorkout] = useState({ exercises: [] });
    useEffect(() => {
        let result = GetWorkoutById(workoutId)
        updateWorkout(result)
        setSelected(result.exercises);
    }, [workoutId])

    useEffect(() => {
        setSelected(workout.exercises)
    }, [workout])


    const handleChangeOpen = () => {
        setOpen(!isOpen)
    }

    const onClose = () => {
        setSelected(workout.exercises)
        handleChangeOpen();
    }

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
            ...workout,
            exercises: workout.exercises.map(e => {
                return e.id == target.id ? target : e;
            })
        })
        SaveWorkout(workout)
    }

    const addSet = (exercise) => {
        let target = getTargetExerciseById(exercise.id);
        target.sets.push(DefaultSet());
        updateWorkoutFilling(target)
    }

    const startWorkout = () => {
        updateWorkoutFilling(StartWorkout(workout))
    }

    const completeWorkout = () => {
        updateWorkoutFilling(CompleteWorkout(workout));
    }

    const handleCheckItem = id => {
        if (!isSelected(id)) {
            setSelected([...selected, GenerateProgramExercise(id)])
        } else {
            setSelected(selected.filter(e => e.id != id))
        }
    }

    const onSaveExercises = () => {
        workout.exercises = selected;
        updateWorkoutFilling(workout);
        handleChangeOpen();
    }

    const isSelected = id => {
        return selected.find(e => e.id == id) || false
    }

    return <Box sx={{
        height: "100%", overflow: "scroll"
    }}>
        <Grid container spacing={2}>
            {IsCompleted(workout) && <Grid item xs={12}>
                <Paper sx={{
                    p: 2
                }}>
                    <Typography variant='h6'>{`Тоннаж: ${workout.volume} кг`}</Typography>
                    <Typography variant='h6'>{`Выполнено на ${workout.progress}%`}</Typography>
                </Paper>
                </Grid>}
            {workout.exercises.map((exercise, idx) => {
                const item = GetExerciseById(exercise.id);
                return <Grid item xs={12} key={idx}>
                    <SetsTable
                        infoMode={IsCompleted(workout) || IsNew(workout)}
                        inputMode={IsActive(workout)}
                        item={item}
                        sets={exercise.sets}
                        handleChangeCompleted={handleChangeCompleted}
                        handleChangeInput={handleChangeInput}
                        addSet={addSet} />
                </Grid>
            })}
        </Grid>

        <Modal
            open={isOpen}
            onClose={onClose}
            title="Изменить упражнения">
            <ExercisesSelector
                handleCheckItem={handleCheckItem}
                selectedExercises={workout.exercises}
                isSelected={isSelected}
                selected={selected}
                onSave={onSaveExercises} />
        </Modal>

       {(IsNew(workout) || IsActive(workout)) && <Button onClick={handleChangeOpen}>Изменить упражнения</Button>}

        {IsNew(workout) && <MainButton
            text={"Go!"}
            onClick={startWorkout}
            sx={{
                backgroundColor: "#FBAB7E",
                backgroundImage: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
                color: 'black'
            }} />}
        {IsActive(workout) && <MainButton
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