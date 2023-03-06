import { Grid, Paper, ToggleButton, ToggleButtonGroup, Tooltip, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ChartCard from '../base/ChartCard';

const ProgressScene = () => {
    return <Box sx={{
        height: "100%", overflow: "scroll",
    }}>
        <Typography variant='h6'>Тренировочный прогресс</Typography>
        <Box sx={{ display: 'flex', justifyContent: "center", pt: 2, pb: 2 }}>
            <ToggleButtonGroup
                value={"week"}
                size='small'
                fullWidth
                exclusive>
                <ToggleButton value="year" sx={{ p: "8px" }}>
                    Год
                </ToggleButton>
                <ToggleButton value="week">
                    Неделя
                </ToggleButton>
                <ToggleButton value="month">
                    Месяц
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <ChartCard title={"Тоннаж"} maxValue={1500} dataKey="volume" data={[
                    {
                        name: "1",
                        volume: 780
                    },
                    {
                        name: "2",
                        volume: 1500
                    }
                ]} />
            </Grid>
        </Grid>
    </Box>
}

export default ProgressScene;