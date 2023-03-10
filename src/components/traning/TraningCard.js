import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardActions, CardHeader, LinearProgress, styled, useTheme } from "@mui/material";
import { Box, keyframes } from '@mui/system';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TextWithIcon from '../base/TextWithIcon';
import { FormatDate } from '../../utils/DateUtils';
import { CalcProgressInPercent } from "../service/WorkoutService"

const animation = keyframes`
0% {
    background-position: 0% 50%;
}
50% {
    background-position: 100% 50%;
}
100% {
    background-position: 0% 50%;
}
`

const TraningCard = (props) => {
    return <CustomCard {...props} />
}

const StyledCard = styled(Card)(({ theme }) => ({
    animation: `${animation} 5s ease infinite`,
    backgroundSize: "200% 100%"
}))

const CustomCard = props => {
    const theme = useTheme();
    const isActive = props.status === "ACTIVE";
    const [progress, updateProgress] = useState(0)
    useEffect(() => {
        if (isActive)
            updateProgress(CalcProgressInPercent(props));
    }, [props])

    console.log("progress", progress)
    return <StyledCard
        onClick={props.onClick}
        sx={{
            display: 'flex',
            backgroundImage: isActive ? 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)' : 'none',
            ...props.sx
        }}>
        <CardActionArea>
            <CardHeader title={props.title}>
            </CardHeader>
            <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: "column", flex: "1 0 auto" }}>
                </Box>
                {!isActive && <Box sx={{ display: "flex", alignItems: 'center', pl: 1 }}>
                    <TextWithIcon
                        icon={<CalendarMonthIcon />}
                        text={FormatDate(new Date(props.startAt))} />
                    <TextWithIcon
                        icon={<AccessTimeIcon />}
                        text={`${props.duration} мин.`} />
                </Box>}
                {isActive && <Box sx={{ width: "100%", position: "absolute", bottom: 0, right: 0 }}>
                    <LinearProgress variant="determinate" value={progress} sx={{
                        height: 16
                    }} />
                </Box>}

            </CardActions>
        </CardActionArea>
    </StyledCard>
}

export default TraningCard;