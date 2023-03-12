import { Fade, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const CountChart = ({ title, count, fade }) => {
    return <Paper sx={{ p: 2, height: 140 }}>
        <Box sx={{display: 'flex', flexDirection: "column", alignItems: 'stretch', height: "100%"}}>
            <Box sx={{ display: 'flex', justifyContent: "center", flexGrow: 1 }}>
                <Typography >{title}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', height: "100%", flexGrow: 2 }}>
                <Fade in={fade} timeout={150}>
                    <Typography variant='h2'>{count}</Typography>
                </Fade>
            </Box>
        </Box>

    </Paper>
}

export default CountChart;