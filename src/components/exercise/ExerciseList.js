import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import ExerciseInfo from "./ExerciseInfo";

const getExcercises = () => {
    return [
        {
            "id": "1",
            "title": "Подъем штанги на бицепс",
            "partOfBody": "ARM",
            "keyMuscle": "BICEPS_OF_ARM"
        },
        {
            "id": "2",
            "title": "Французский жим",
            "partOfBody": "ARM",
            "keyMuscle": "BICEPS_OF_ARM"
        }
    ]
}

const ExerciseList = () => {
    const [exercises, setExercises] = useState([])
    useEffect(() => {
        setExercises(getExcercises());
    }, [])
    return <List>
        {exercises.map((exercise) => <ListItem disablePadding>
            <ListItemButton>
                <ListItemText primary={exercise.title}></ListItemText>
            </ListItemButton>
        </ListItem>)}
    </List>
}

export default ExerciseList;