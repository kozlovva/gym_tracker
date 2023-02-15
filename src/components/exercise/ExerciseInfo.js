import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AddButton from '../base/AddButton';
import ExerciseFrom from './ExerciseForm';

const ExerciseInfo = (props) => {
    return <div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: "column" }}>
            <ExerciseFrom
                exercise={props.exercise}
                onChange={props.onChange} />

            <Button
                onClick={props.onRemove}
                fullWidth
                color="error"
                sx={{ justifyContent: "flex-start", mt: 1, pl: 0 }}
                disableRipple>
                Удалить упражнение
            </Button>

            <AddButton text="Сохранить" onClick={props.onSave} />
        </Box>
    </div>
};

export default ExerciseInfo;