import { Button, Card, CardActions, CardContent, createTheme, TextField, ThemeProvider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const theme = createTheme({
    palette: {
        text: {
            primary: "#fff"
        }
    }
})

const ExerciseInfo = (props) => {
    return <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <TextField
            fullWidth
            id="exeecise-title"
            label="Название"
            variant="standard"
            value={props.title} />
        <Button
            fullWidth
            color="error"
            sx={{ justifyContent: "flex-start", mt:1, pl: 0 }}
            disableRipple>
            Удалить упражнение
        </Button>

    </Box>
};

export default ExerciseInfo;