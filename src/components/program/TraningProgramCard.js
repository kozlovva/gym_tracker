import React from 'react';
import { Paper, Typography, useTheme } from "@mui/material"
import { ModalTypeInfo, MuscleGroupsEnum, MuscleGroupsInfo } from '../Constants';
import { Box } from '@mui/system';
import { GetUniqueMuscleGroups } from "../service/TraningProgramService"

const TraningProgramCard = (props) => {
    const theme = useTheme();
    const muscleGroups = GetUniqueMuscleGroups(props.item)
        .map(item => MuscleGroupsInfo[item] ? MuscleGroupsInfo[item].locale : '')
        .join();
    return <Paper
        sx={{
            display: "flex",
            minHeight: "160px",
            flexDirection: 'column',
            p: 1,
            ...props.sx
        }}
        onClick={(e) => props.onClick(e, ModalTypeInfo, props.item)}>
        <Box sx={{ flexGrow: 4 }}>
            {props.withCount && <Typography variant='caption' color="secondary">Упражнений {props.item.exercises.length || 0}</Typography>}
        </Box>
        <Box sx={{ flexGrow: 1 }}>
            <Typography>{props.item.title}</Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: "end" }}>
            <Typography variant='caption' color="secondary">{muscleGroups}</Typography>
        </Box>
    </Paper>
}

export default TraningProgramCard;