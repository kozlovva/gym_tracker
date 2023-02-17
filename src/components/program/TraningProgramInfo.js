import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AddButton from '../base/AddButton';
import TraningProgramForm from './TraningProgramForm';

const TraningProgramInfo = props => {
    return <div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: "column", pb: 16 }}>
            <TraningProgramForm
                item={props.item}
                onChange={props.onChange}
                setExercises={props.setExercises}
                onSave={props.setExercises}/>

            <Button
                onClick={props.onRemove}
                fullWidth
                color="error"
                sx={{  mt: 1, pl: 0 }}
                disableRipple>
                Удалить программу
            </Button>

            <AddButton text="Сохранить" onClick={props.onSave} isBottom={true}/>
        </Box>
    </div>
}
 
export default TraningProgramInfo;