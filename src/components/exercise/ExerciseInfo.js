import { Button, Card, CardActions, CardContent, createTheme, ThemeProvider, Typography } from '@mui/material';
import React from 'react';

const theme = createTheme({
    palette: {
        text: {
            primary: "#fff"
        }
    }
})

const ExerciseInfo = (props) => {
    return <ThemeProvider>
        <Card>
            <CardContent>
                <Typography>{props.title}</Typography>
                <Typography>{props.partOfBody}</Typography>
                <Typography>{props.keyMuscle}</Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Remove</Button>
            </CardActions>
        </Card>

    </ThemeProvider>
};

export default ExerciseInfo;