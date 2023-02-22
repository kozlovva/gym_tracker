import { Box } from '@mui/system';
import React from 'react';
import MainButton from '../base/MainButton';
import RemoveEntityButton from '../base/RemoveEntityButton';
import ExerciseFrom from './ExerciseForm';

const ExerciseInfo = (props) => {
    return <div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: "column"}}>
            <ExerciseFrom
                exercise={props.exercise}
                onChange={props.onChange} />

            <RemoveEntityButton onClick={props.onRemove} text="Удалить упражнение"/>

            <MainButton text="Сохранить" onClick={props.onSave} isBottom={true} />
        </Box>
    </div>
};

export default ExerciseInfo;