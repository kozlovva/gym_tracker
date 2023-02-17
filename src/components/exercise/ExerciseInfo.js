import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AddButton from '../base/AddButton';
import RemoveEntityButton from '../base/RemoveEntityButton';
import ExerciseFrom from './ExerciseForm';

const ExerciseInfo = (props) => {
    return <div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: "column"}}>
            <ExerciseFrom
                exercise={props.exercise}
                onChange={props.onChange} />

            <RemoveEntityButton onClick={props.onRemove} text="Удалить упражнение"/>

            <AddButton text="Сохранить" onClick={props.onSave} isBottom={true} />
        </Box>
    </div>
};

export default ExerciseInfo;