import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { TraningProgram } from '../../types';
import MainButton from '../base/MainButton';
import TraningProgramForm from './TraningProgramForm';

interface Props {
    traningProgram: TraningProgram,
    onChange(): void,
    setExercises(exercises: any): void,
    onRemove(): void,
    onSave(): void
}

const TraningProgramInfo = ({traningProgram, onChange, setExercises, onRemove, onSave}: Props) => {
    return <div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: "column", pb: 16 }}>
            <TraningProgramForm
                item={traningProgram}
                onChange={onChange}
                setExercises={setExercises}
                onSave={setExercises}/>

            <Button
                onClick={onRemove}
                fullWidth
                color="error"
                sx={{  mt: 1, pl: 0 }}
                disableRipple>
                Удалить программу
            </Button>

            <MainButton text="Сохранить" onClick={onSave} isBottom={true}/>
        </Box>
    </div>
}
 
export default TraningProgramInfo;