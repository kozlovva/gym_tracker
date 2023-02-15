import React from 'react';
import { Card as MuiCard, CardActionArea, CardContent, CardHeader, styled, Typography } from "@mui/material"
import { ModalTypeInfo } from '../Constants';
import { useTheme } from '@emotion/react';


const Card = styled((props) => (
    <MuiCard sx={{ display: "flex", minHeight: "180px" }} {...props} />
))(({ theme }) => ({
    backgroundColor: theme.palette.primary.light
}))

const TraningProgramCard = (props) => {

    const theme = useTheme();

    return <Card
        onClick={(e) => props.onClick(e, ModalTypeInfo, props.item)}
        sx={{
            
        }}>
        <CardActionArea>
            <CardHeader title={props.item.title}>
            </CardHeader>
            <CardContent>
                <Typography variant='caption'>Кол-во упражнений: {props.item.exercises.length || 0}</Typography>
            </CardContent>
        </CardActionArea>
    </Card>
}

export default TraningProgramCard;