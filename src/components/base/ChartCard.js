import React from 'react';
import { Paper, Typography, useTheme } from "@mui/material";
import Chart from "./Chart";
import { Box } from '@mui/system';

const ChartCard = ({ title, maxValue, data, dataKey }) => {
    const theme = useTheme();
    return <Paper sx={{ p: 1, height: 220 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography variant="h6">{title}</Typography>
            <Typography variant='h6' color={theme.palette.secondary.dark}>Макс. {maxValue}</Typography>
        </Box>
        <Chart data={data} dataKey={dataKey} />
    </Paper>
}

export default ChartCard;