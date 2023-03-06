import { Fade, Grid, Paper, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ChartCard from '../base/ChartCard';
import { GetStatisticByPeriod } from '../service/ProgressService';

const ProgressScene = () => {
    const [period, updatePeriod] = useState("week")
    const [fade, updateFade] = useState(true)
    const [statistic, updateStatistic] = useState({
        workoutCount: 0,
        fullCompleteCount: 0,
        tonnageData: {
            max: 0,
            data: []
        }
    })

    useEffect(() => {
        updateStatistic(GetStatisticByPeriod(period))
    }, [period])

    const handleChangePeriod = e => {
        
        updateFade(false);
        setTimeout(() => {
            updatePeriod(e.target.value)
            updateFade(true);
        }, 150)
        
    }

    return <Box sx={{
        height: "100%", overflow: "scroll",
    }}>
        <Typography variant='h6'>Тренировочный прогресс</Typography>
        TEST4
        <Box sx={{ display: 'flex', justifyContent: "center", pt: 2, pb: 2 }}>
            <ToggleButtonGroup
                value={period}
                size='small'
                fullWidth
                onChange={handleChangePeriod}
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
            <Grid item xs={6}>
                <Paper sx={{ p: 2, height: 220 }}>
                    <Box sx={{ display: 'flex', justifyContent: "center"}}>
                        <Typography>Тренировок</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', height: "100%" }}>
                        <Fade in={fade} timeout={150}>
                            <Typography variant='h2'>{statistic.workoutCount}</Typography>
                        </Fade>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper sx={{ p: 2, height: 220 }}>
                    <Box sx={{ display: 'flex', justifyContent: "center"}}>
                        <Typography>Завершено</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', height: "100%" }}>
                        <Fade in={fade}>
                            <Typography variant='h2'>{statistic.fullCompleteCount}</Typography>
                        </Fade>

                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <ChartCard title={"Тоннаж"} maxValue={statistic.tonnageData.max} dataKey="volume" data={statistic.tonnageData.data} />
            </Grid>
        </Grid>
    </Box>
}

export default ProgressScene;