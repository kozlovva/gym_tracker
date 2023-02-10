import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const getExcerciseInfo = id => {
    return ;
}

const ExerciseInfo = (props) => {

    return <Card>
        <CardContent>
            <Typography>{props.title}</Typography>
            <Typography>{props.partOfBody}</Typography>
            <Typography>{props.keyMuscle}</Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>Remove</Button>
        </CardActions>
    </Card>

};

export default ExerciseInfo;