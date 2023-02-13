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

const ExerciseInfo = (props) => {
    return <div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: "column" }}>
            <ExerciseFrom
                exercise={props.exercise}
                onChange={props.onChange} />

            <Button
                onClick={props.onRemove}
                fullWidth
                color="error"
                sx={{ justifyContent: "flex-start", mt: 1, pl: 0 }}
                disableRipple>
                Удалить упражнение
            </Button>

            <AddButton text="Сохранить" onClick={props.onSave} />
        </Box>
    </div>
};

export default ExerciseInfo;