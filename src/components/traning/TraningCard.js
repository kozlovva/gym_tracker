import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import Tag from '../base/Tag';
import { Box } from '@mui/system';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TextWithIcon from '../base/TextWithIcon';



const TraningCard = (props) => {
    return <Card
        onClick={props.onClick}
        sx={{
            display: 'flex',
            backgroundColor: "#FBAB7E",
            backgroundImage: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'
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
                        text={props.date} />
                    <TextWithIcon
                        icon={<AccessTimeIcon />}
                        text={`${props.duration} минут`} />
                </Box>
            </CardActions>
        </CardActionArea>
    </Card>;
}

export default TraningCard;