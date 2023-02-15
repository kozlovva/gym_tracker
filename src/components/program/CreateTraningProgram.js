import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AddButton from '../base/AddButton';
import TraningProgramForm from './TraningProgramForm';

const CreateTraningProgram = props => {
    return <div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: "column", pb: 16 }}>
            <TraningProgramForm
                item={props.item}
                onChange={props.onChange}
                setExercises={props.setExercises}
                onSave={props.setExercises}/>

            <AddButton text="Сохранить" onClick={props.onSave} />
        </Box>
    </div>
}
 
export default CreateTraningProgram;