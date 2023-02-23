import { Box, Button, Grid, TextField, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { GetExerciseById } from '../../api/ExercisesAPI';
import Modal from '../base/Modal';
import { DefaultSet } from '../Constants';
import ExercisesSelector from '../exercise/ExercisesSelector';
import SetsTable from './SetsTable';

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

    const addSet = (exercise) => {
        let target = selected.find(e => e.id == exercise.id);
        target.sets.push(DefaultSet());
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
                    <SetsTable
                        item={item}
                        sets={exercise.sets}
                        handleChangeInput={handleChangeRepeats}
                        disableWeigth disableCompleted infoMode
                        addSet={addSet}
                    />
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
           Изменить упражнения
        </Button>
    </Box >
}

export default TraningProgramForm;