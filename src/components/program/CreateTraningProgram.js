import { Box } from '@mui/system';
import React from 'react';
import MainButton from '../base/MainButton';
import TraningProgramForm from './TraningProgramForm';

const CreateTraningProgram = props => {
    return <div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: "column", pb: 16 }}>
            <TraningProgramForm
                item={props.item}
                onChange={props.onChange}
                setExercises={props.setExercises}
                onSave={props.setExercises}/>

            <MainButton text="Сохранить" onClick={props.onSave} isBottom={true} />
        </Box>
    </div>
}
 
export default CreateTraningProgram;