import { Box } from '@mui/system';
import React from 'react';
import MainButton from '../base/MainButton';
import ExerciseFrom from './ExerciseForm';

const CreateExercise = (props) => {
    return <div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: "column" }}>
            <ExerciseFrom
                exercise={props.exercise}
                onChange={props.onChange} />

            <MainButton text="Создать" onClick={props.onSave} isBottom={true} />
        </Box>
    </div>
};

export default CreateExercise;