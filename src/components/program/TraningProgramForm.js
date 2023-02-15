import { Avatar, Box, Button, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { GetExerciseById } from '../../api/ExercisesAPI';
import Modal from '../base/Modal';
import ExercisesSelector from '../exercise/ExercisesSelector';
import DeleteIcon from '@mui/icons-material/Delete';

const TraningProgramForm = props => {
    const [selected, setSelected] = useState([]);
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        setSelected([...props.item.exercises])
    }, [])

    const isSelected = id => {
        return selected.includes(id)
    }

    const handleCheckItem = id => {
        if (!isSelected(id)) {
            setSelected([...selected, id])
        } else {
            setSelected(selected.filter(e => e != id))
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

        {props.item.exercises.length > 0 && <List>
            {props.item.exercises.map((exerciseId, idx) => {
                const exercise = GetExerciseById(exerciseId);
                return <ListItem key={idx} sx={{ pl: 0, pr: 0 }}>
                    <ListItemAvatar>
                        <Avatar>
                            <FitnessCenterIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={exercise.title} secondary={exercise.muscle} />
                </ListItem>
            })}
        </List>}

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

        <Button fullWidth>
            <AddIcon color='action' onClick={handleChangeOpen} />
        </Button>
    </Box>
}

export default TraningProgramForm;