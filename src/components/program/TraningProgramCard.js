import React from 'react';
import { Card as MuiCard, CardActionArea, CardContent, CardHeader, styled, Typography } from "@mui/material"
import { ModalTypeInfo } from '../Constants';

const Card = styled((props) => (
    <MuiCard sx={{ display: "flex", minHeight: "180px", ...props.sx }} {...props} />
))(({ theme }) => ({
    backgroundColor: theme.palette.primary.light
}))

const TraningProgramCard = (props) => {

    return <Card sx={props.sx}
        onClick={(e) => props.onClick(e, ModalTypeInfo, props.item)}>
        <CardActionArea>
            <CardHeader title={props.item.title}>
            </CardHeader>
            
            {props.showCount && <CardContent>
                <Typography variant='caption'>Кол-во упражнений: {props.item.exercises.length || 0}</Typography>
            </CardContent>}
        </CardActionArea>
    </Card>
}

export default TraningProgramCard;