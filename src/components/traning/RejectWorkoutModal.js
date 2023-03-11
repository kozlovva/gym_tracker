import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Modal from '../base/Modal';

const RejectWorkoutModal = ({ isOpen, onClose, rejectCause, handleChange, rejectWorkout }) => {
    return <Modal
        open={isOpen}
        onClose={onClose}
        title="Отмена тренировки">
        <Box>
            <FormControl fullWidth>
                <FormLabel id="reject-couse-group">Укажите причину</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={rejectCause}
                    onChange={handleChange}>
                    <FormControlLabel value="Устал" control={<Radio />} label="Устал" />
                    <FormControlLabel value="Плохое самочувствие" control={<Radio />} label="Плохое самочувствие" />
                </RadioGroup>
            </FormControl>
            <Button onClick={rejectWorkout} fullWidth>Отменить тренировку</Button>
        </Box>
    </Modal>
}

export default RejectWorkoutModal;