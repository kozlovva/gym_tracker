import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const WorkoutInfo = ({ workout }) => {
    return <Grid item xs={12} sx={{display: 'flex', gap: 1, flexDirection: 'column'}}>
        <Paper sx={{
            p: 2
        }}>
            <Typography variant='h6'>{`Тоннаж: ${workout.volume} кг`}</Typography>
            <Typography variant='h6'>{`Выполнено на ${workout.progress}%`}</Typography>
        </Paper>
        <Paper sx={{
            p: 2
        }}>
            <Typography variant='h6'>{`Тоннаж: ${workout.volume} кг`}</Typography>
            <Typography variant='h6'>{`Выполнено на ${workout.progress}%`}</Typography>
        </Paper>
    </Grid>
}

export default WorkoutInfo;