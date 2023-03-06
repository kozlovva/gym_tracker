import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';

const CustomTooltip = ({ payload }) => {
    return <Box sx={{ p: 1, display: 'flex', flexDirection: 'column' }}>
        {payload.length && <Typography variant='caption'>{payload[0].payload.date}</Typography>}
        {payload.length && <Typography variant='caption'>{payload[0].value}</Typography>}
    </Box>
}

const Chart = ({ data, dataKey }) => {
    const theme = useTheme();

    return <ResponsiveContainer height={160} width="100%">
        <AreaChart
            data={data}>
            <Tooltip
                position={{ y: 0 }}
                content={<CustomTooltip />}
                wrapperStyle={{backgroundColor: theme.palette.secondary.light, outlineColor: theme.palette.secondary.dark }} />
            <Area
                type="monotone"
                dataKey={dataKey}
                stroke={theme.palette.secondary.dark}
                fill={theme.palette.secondary.light}
                strokeWidth={2}
            />
        </AreaChart>
    </ResponsiveContainer>
}

export default Chart;