import { Box, Button, Divider, Grid, Paper, TextField, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { GetExerciseById } from '../../api/ExercisesAPI';
import Modal from '../base/Modal';
import ExercisesSelector from '../exercise/ExercisesSelector';

const GenerateExercise = id => {
    return {
        id: id,
        sets: [
            {
                repeats: 10,
                completed: false
            },
            {
                repeats: 10,
                completed: false
            },
            {
                repeats: 10,
                completed: false
            },
            {
                repeats: 10,
                completed: false
            }
        ]
    }
}

const TraningProgramForm = props => {
    const [selected, setSelected] = useState([]);
    const [isOpen, setOpen] = useState(false)
    const theme = useTheme();

    useEffect(() => {
        setSelected([...props.item.exercises])
    }, [])

    const isSelected = id => {
        return selected.find(e => e.id == id) || false
    }

    const handleCheckItem = id => {
        if (!isSelected(id)) {
            setSelected([...selected, GenerateExercise(id)])
        } else {
            setSelected(selected.filter(e => e.id != id))
        }
    }

    const onClose = () => {
        setSelected(props.item.exercises)
        handleChangeOpen();
    }

    const handleChangeOpen = () => {
        setOpen(!isOpen)
    }

    const onSaveExercises = () => {
        props.setExercises(selected);
        handleChangeOpen();
    }

    const handleChangeRepeats = (e, exercise, index) => {
        let target = selected.find(e => e.id == exercise.id);
        target.sets[index].repeats = parseInt(e.target.value)
        setSelected(selected.map(e => {
            if (e.id == target.id)
                return target;

            return e;
        }))
    }

    return <Box>
        <TextField
            onChange={(e) => { props.onChange(e, "title") }}
            fullWidth
            id="exercise-title"
            label="Название"
            variant="standard"
            value={props.item.title}
            sx={{ pt: 1, pb: 1 }} />

        {props.item.exercises.length == 0 && <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 2 }}>
            <Typography variant='caption'>Упражнения не добавлены</Typography>
        </Box>}


        {props.item.exercises.length > 0 && <Grid container spacing={2}>
            {props.item.exercises.map((exercise, idx) => {
                const item = GetExerciseById(exercise.id);
                return <Grid item xs={12} key={idx}>
                    <Paper sx={{ p: 1, mb: 2, mt: 1, backgroundColor: theme.palette.primary.light }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography>{item.title}</Typography>
                                <Typography variant='caption'>{item.muscle}</Typography>
                            </Box>

                        </Box>

                        <Divider />

                        <Box>
                            {exercise.sets.map((set, index) =>
                                <Grid container key={index} sx={{ mt: 1 }}>
                                    <Grid item xs={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        {index + 1}
                                    </Grid>
                                    <Grid item xs={10}>
                                        <TextField
                                            size="small"
                                            type={"number"}
                                            onChange={(e) => handleChangeRepeats(e, exercise, index)}
                                            fullWidth
                                            value={set.repeats} />
                                    </Grid>
                                </Grid>
                            )}
                        </Box>
                    </Paper>
                </Grid>
            })}
        </Grid>
        }

        <Modal
            open={isOpen}
            onClose={onClose}
            title="Добавление упражнений">
            <ExercisesSelector
                handleCheckItem={handleCheckItem}
                selectedExercises={props.item.exercises}
                isSelected={isSelected}
                selected={selected}
                onSave={onSaveExercises} />
        </Modal>

        <Button fullWidth variant="contained" color="secondary" onClick={handleChangeOpen}>
            Добавить упражнение
        </Button>
    </Box >
}

export default TraningProgramForm;