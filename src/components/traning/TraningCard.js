import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import Tag from '../base/Tag';
import { Box } from '@mui/system';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TextWithIcon from '../base/TextWithIcon';
import { FormatDate } from '../../utils/DateUtils';

const defailtSx = {
    display: 'flex'
}

const TraningCard = (props) => {
    if (props.status == "REJECTED")
        return <CustomCard {...props} sx={{
            backgroundColor: "#93291E",
            backgroundImage: 'linear-gradient(62deg, #ED213A 0%, #93291E 100%)',

        }} />
    if (props.status == "COMPLETED")
        return <CustomCard {...props} sx={{
            backgroundColor: "#E2E2E2",
            backgroundImage: 'linear-gradient(62deg, #C9D6FF 0%, #E2E2E2 100%)',

        }} />

    return <CustomCard {...props} />
}

const CustomCard = props => {
    return <Card
        onClick={props.onClick}
        sx={{
            display: 'flex',
            backgroundColor: "#FBAB7E",
            backgroundImage: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
            ...props.sx
        }}>
        <CardActionArea>
            <CardHeader title={props.title}>
            </CardHeader>
            <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: "column", flex: "1 0 auto" }}>
                </Box>
                <Box sx={{ display: "flex", alignItems: 'center', pl: 1 }}>
                    <TextWithIcon
                        icon={<CalendarMonthIcon />}
                        text={FormatDate(new Date(props.date))} />
                    <TextWithIcon
                        icon={<AccessTimeIcon />}
                        text={`${props.duration} мин.`} />
                </Box>
            </CardActions>
        </CardActionArea>
    </Card>
}

export default TraningCard;