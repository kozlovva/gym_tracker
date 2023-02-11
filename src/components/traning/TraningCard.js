import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import Tag from '../base/Tag';
import { Box } from '@mui/system';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TextWithIcon from '../base/TextWithIcon';

const TraningCard = (props) => {
    return <Card sx={{ display: 'flex' }}>
        <CardActionArea>
            <CardHeader title={props.title}>

            </CardHeader>
            <CardMedia sx={{ height: 140 }} image='https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png' />
            <CardActions sx={{ justifyContent: "flex-end", p: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: "column", flex: "1 0 auto" }}>
                </Box>
                <Box sx={{ display: "flex", alignItems: 'center', pl: 1 }}>
                    <TextWithIcon
                        icon={<CalendarMonthIcon />}
                        text={props.date} />
                    <TextWithIcon 
                    icon={<AccessTimeIcon />}
                    text={`${props.duration} минут`}/>
                </Box>
            </CardActions>
        </CardActionArea>
    </Card>;
}

export default TraningCard;