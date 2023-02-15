import { Button, Card, CardActions, CardContent, createTheme, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField, ThemeProvider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AddButton from '../base/AddButton';
import { MuscleGroupsEnum } from '../Constants';
import ExerciseFrom from './ExerciseForm';

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