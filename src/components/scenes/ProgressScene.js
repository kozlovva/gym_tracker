import { Fade, Grid, Paper, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ChartCard from '../base/ChartCard';
import CountChart from '../base/CountChart';
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
        },
        durationData: {
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

    return <div>
        <Typography variant='h6'>Тренировочный прогресс</Typography>
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
                <CountChart
                    title="Тренировок"
                    fade={fade}
                    count={statistic.workoutCount} />
            </Grid>
            <Grid item xs={6}>
                <CountChart
                    title="Завершено"
                    fade={fade}
                    count={statistic.fullCompleteCount} />
            </Grid>
            <Grid item xs={12}>
                <ChartCard
                    title={"Тоннаж"}
                    maxValue={statistic.tonnageData.max}
                    dataKey="volume"
                    data={statistic.tonnageData.data} />
            </Grid>
            <Grid item xs={12}>
                <ChartCard
                    title={"Длительность"}
                    maxValue={statistic.durationData.max}
                    dataKey="duration"
                    data={statistic.durationData.data} />
            </Grid>
        </Grid>
    </div>
}

export default ProgressScene;