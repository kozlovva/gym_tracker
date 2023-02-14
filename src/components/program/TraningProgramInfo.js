import React from 'react';
import { Card as MuiCard, CardActionArea, CardHeader, styled } from "@mui/material"


const Card = styled((props) => (
    <MuiCard sx={{ display: "flex", minHeight: "240px" }} {...props}/>
))(({ theme }) => ({
    backgroundColor: theme.palette.primary.light
}))

const TraningProgramInfo = (props) => {
    return <Card onClick={(e) => props.onClick(e, props.item)}>
        <CardActionArea>
            <CardHeader title={props.item.title}>

            </CardHeader>
        </CardActionArea>
    </Card>
}
 
export default TraningProgramInfo;