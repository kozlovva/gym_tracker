import { Avatar, Button, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import BoyIcon from '@mui/icons-material/Boy';
import DeleteIcon from "@mui/icons-material/Delete"
import EditButton from "@mui/icons-material/Edit";
import AddButton from "../base/AddButton";

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
    return <div>
        <Paper>
            <List>
                {exercises.map((exercise) =>
                    <ListItemButton
                        sx={{ mt: 1, mb: 1 }}>
                        <ListItemAvatar>
                            <Avatar>
                                <BoyIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={exercise.title}
                        />
                    </ListItemButton>)}
            </List>
        </Paper>
        <AddButton text="Создать упражнение" />
    </div>
}

export default ExerciseList;