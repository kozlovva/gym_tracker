import { useTheme } from '@mui/system';
import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

const Chart = ({data, dataKey}) => {
    const theme = useTheme();
    return <ResponsiveContainer height={140} width="100%">
        <AreaChart
            data={data}>
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