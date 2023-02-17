import { Box, Checkbox, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, TextField, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetExerciseById } from '../../api/ExercisesAPI';
import AddSetButton from '../base/AddSetButton';
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
                    <Paper sx={{ p: 1, mb: 2, mt: 1, backgroundColor: theme.palette.primary.light }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', pl: 2, pr: 2 }}>
                                <Typography>{item.title}</Typography>
                                <Typography variant='caption'>{item.muscle}</Typography>
                            </Box>
                        </Box>

                        <Divider />

                        <Box>
                            <TableContainer>
                                <Table sx={{ width: "100%", tableLayout: 'fixed' }} size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Подход</TableCell>
                                            <TableCell align='center'>Повторы</TableCell>
                                            <TableCell align='center'>Вес</TableCell>
                                            <TableCell>Выполнен</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {exercise.sets.map((set, index) =>
                                            <TableRow key={index}>
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell align='center'>
                                                    <TextField
                                                        size='small'
                                                        name="repeats"
                                                        type={"number"}
                                                        onChange={(e) => { handleChangeInput(e, item, index) }}
                                                        fullWidth
                                                        value={set.repeats} />
                                                </TableCell>
                                                <TableCell align='center'>
                                                    <TextField
                                                        size='small'
                                                        name="wieght"
                                                        type={"number"}
                                                        onChange={(e) => { handleChangeInput(e, item, index) }}
                                                        fullWidth
                                                        value={set.wieght} />
                                                </TableCell>
                                                <TableCell align='right'>
                                                    <Checkbox
                                                        name="completed"
                                                        color='secondary'
                                                        checked={set.completed}
                                                        onChange={(e) => handleChangeCompleted(e, item, index)} />
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 1 }}>
                                <AddSetButton text="Добавить подход" onClick={e => addSet(item)}/>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            })}
        </Grid>
    </Box>
}

export default WorkoutProcessScene;