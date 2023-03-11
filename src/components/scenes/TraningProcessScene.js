import { Button, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetExerciseById } from '../../api/ExercisesAPI';
import MainButton from '../base/MainButton';
import Modal from '../base/Modal';
import { DefaultSet, GenerateProgramExercise } from '../Constants';
import SetsTable from '../program/SetsTable';
import { GetTraningProgramById } from '../service/TraningProgramService';
import { CompleteWorkout, GetWorkoutById, IsActive, IsCompleted, IsNew, IsRejected, RejectWorkout, SaveWorkout, StartWorkout } from '../service/WorkoutService';
import ChangeExercisesModal from '../traning/ChangeExercisesModal';
import RejectWorkoutModal from '../traning/RejectWorkoutModal';
import WorkoutInfo from '../traning/WorkoutInfo';

const WorkoutProcessScene = (props) => {
    const { workoutId } = useParams();

    const [selected, setSelected] = useState([]);
    const [isOpen, setOpen] = useState(false)
    const [workout, updateWorkout] = useState({ exercises: [] });
    const [traningProgram, updateTraningProgram] = useState({ title: "" });
    const [rejectState, updateRejectState] = useState({
        open: false,
        rejectCause: "Устал"
    })

    useEffect(() => {
        let result = GetWorkoutById(workoutId)
        updateWorkout(result)
        setSelected(result.exercises);
        let traningProgram = GetTraningProgramById(result.traningProgramId)
        updateTraningProgram(traningProgram)
    }, [workoutId])

    useEffect(() => {
        setSelected(workout.exercises)
    }, [workout])

    const handleChangeReject = () => {
        updateRejectState({ ...rejectState, open: !rejectState.open })
    }

    const onCloseReject = () => {
        updateRejectState({
            open: false,
            rejectCause: ""
        })
    }

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

    const rejectWorkout = () => {
        updateWorkoutFilling(RejectWorkout(workout))
        onCloseReject();
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

    return <div>
        <Typography variant='h6'>Тренировка {traningProgram.title}</Typography>
        <Grid container spacing={2}>
            {!IsActive(workout) && <WorkoutInfo workout={workout}/>}
            {workout.exercises.map((exercise, idx) => {
                const item = GetExerciseById(exercise.id);
                return <Grid item xs={12} key={idx}>
                    <SetsTable
                        infoMode={!IsActive(workout)}
                        inputMode={IsActive(workout)}
                        item={item}
                        sets={exercise.sets}
                        handleChangeCompleted={handleChangeCompleted}
                        handleChangeInput={handleChangeInput}
                        addSet={addSet} />
                </Grid>
            })}
        </Grid>

        <ChangeExercisesModal
            isOpen={isOpen}
            onClose={onClose}
            handleCheckItem={handleCheckItem}
            selectedExercises={workout.exercises}
            isSelected={isSelected}
            selected={selected}
            onSaveExercises={onSaveExercises}
        />

        <RejectWorkoutModal
            isOpen={rejectState.open}
            rejectCause={rejectState.rejectCause}
            onClose={onCloseReject}
            handleChange={(e) => updateRejectState({ ...rejectState, rejectCause: e.target.value })}
            rejectWorkout={rejectWorkout} />

        {(IsNew(workout) || IsActive(workout)) && <Button onClick={handleChangeOpen}>Изменить упражнения</Button>}
        {(IsNew(workout) || IsActive(workout)) && <Button onClick={handleChangeReject}>Отменить тренировку</Button>}

        {IsActive(workout) && <MainButton
            text={"Завершить"}
            onClick={completeWorkout}
            sx={{
                backgroundColor: "#FBAB7E",
                backgroundImage: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
                color: 'black'
            }} />}
    </div>
}

export default WorkoutProcessScene;