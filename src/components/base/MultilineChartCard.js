import { FormControl, InputLabel, MenuItem, Paper, Select, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import { MuscleGroupsEnum } from '../Constants';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const CustomTooltip = ({ payload, selectedMuscle }) => {

    if (payload == null || payload == 'undefined')
        return <div></div>

    return <Box sx={{ p: 1, display: 'flex', flexDirection: 'column' }}>
        {payload.length && <Typography variant='caption' color="secondary">{payload[0].payload.date}</Typography>}
        {payload.length && <Typography variant='caption' color="secondary">{selectedMuscle} - {payload[0].payload.setsCount}</Typography>}
    </Box>
}

const MultilineChartCard = ({ data, title }) => {
    const [selectedMuscle, setSelectedMuscle] = useState("BICEPS")
    const [setsData, updateSetsData] = useState([]);
    console.log("DATA", data)
    useEffect(() => {
        if (data != undefined && data.data != undefined) {
            const newData = data.data.find(item => item.muscle == selectedMuscle);
            updateSetsData(newData.data)
        }
            
    }, [selectedMuscle, data])
    const theme = useTheme();

    return <Paper sx={{ p: 1, height: 300 }}>
        <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
            <Typography variant="h6">{title}</Typography>
            <FormControl
                variant='standard'
                sx={{ m: 1, ml: 0, mr: 0, pt: 1, pb: 1 }}
                fullWidth>
                <InputLabel id="demo-multiple-name-label">Мышечные группы</InputLabel>
                <Select
                    onChange={(e) => { setSelectedMuscle(e.target.value) }}
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={selectedMuscle}
                    MenuProps={MenuProps}>
                    {MuscleGroupsEnum.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
        <ResponsiveContainer height={160} width="100%">
            <AreaChart
                data={setsData}>
                <Tooltip
                    position={{ y: 0 }}
                    content={<CustomTooltip selectedMuscle={selectedMuscle} />}
                    wrapperStyle={{ backgroundColor: theme.palette.secondary.light, outlineColor: theme.palette.secondary.dark, borderRadius: 1 }} />
                <Area
                    type="monotone"
                    dataKey="setsCount"
                    strokeWidth={2}
                    stroke={theme.palette.secondary.dark}
                    fill={theme.palette.secondary.light} />
            </AreaChart>
        </ResponsiveContainer>
    </Paper>
}

export default MultilineChartCard;