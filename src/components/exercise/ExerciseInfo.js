import { Button, Card, CardActions, CardContent, createTheme, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField, ThemeProvider, Typography } from '@mui/material';
import { Box } from '@mui/system';
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

const theme = createTheme({
    palette: {
        text: {
            primary: "#fff"
        }
    }
})

const ExerciseInfo = (props) => {
    console.log(props.exercise)
    return <div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: "column" }}>
            <TextField
                onChange={(e) => { props.onChange(e, "title") }}
                fullWidth
                id="exeecise-title"
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
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={[props.exercise.muscle]}
                    MenuProps={MenuProps}>
                    {MuscleGroupsEnum.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Button
                onClick={props.onRemove}
                fullWidth
                color="error"
                sx={{ justifyContent: "flex-start", mt: 1, pl: 0 }}
                disableRipple>
                Удалить упражнение
            </Button>
        </Box>
    </div>
};

export default ExerciseInfo;