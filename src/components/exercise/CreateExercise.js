import { Button, Card, CardActions, CardContent, createTheme, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField, ThemeProvider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AddButton from '../base/AddButton';
import { MuscleGroupsEnum } from '../Constants';
import ExerciseFrom from './ExerciseForm';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const CreateExercise = (props) => {
    return <div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: "column" }}>
            <ExerciseFrom
                exercise={props.exercise}
                onChange={props.onChange} />

            <AddButton text="Создать" onClick={props.onSave} />
        </Box>
    </div>
};

export default CreateExercise;