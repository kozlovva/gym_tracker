import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import { MuscleGroupsEnum } from '../Constants';

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

const ExerciseFrom = (props) => {
    return <Box>
        <TextField
            onChange={(e) => { props.onChange(e, "title") }}
            fullWidth
            id="exercise-title"
            label="Название"
            variant="standard"
            value={props.exercise.title}
            sx={{ pt: 1, pb: 1 }} />

        <FormControl
            variant='standard'
            sx={{ m: 1, ml: 0, mr: 0, pt: 1, pb: 1 }}
            fullWidth>
            <InputLabel id="demo-multiple-name-label">Мышечные группы</InputLabel>
            <Select
                onChange={(e) => { props.onChange(e, "muscle") }}
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={props.exercise.muscle}
                MenuProps={MenuProps}>
                {MuscleGroupsEnum.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </Box>
}

export default ExerciseFrom;