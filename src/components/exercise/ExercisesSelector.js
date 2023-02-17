import { Accordion, AccordionDetails, AccordionSummary as MuiAccordionSummary, Box, Button, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { GetExercisesByMuscle } from '../../api/ExercisesAPI';
import AddButton from '../base/AddButton';
import { MuscleGroupsEnum, MuscleGroupsInfo } from '../Constants';
import CheckIcon from '@mui/icons-material/Check';

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        {...props}
    />
))(({ theme }) => ({
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const ExercisesSelector = (props) => {
    return <div>
        <Box sx={{ pb: 14 }}>
            {MuscleGroupsEnum.map((muscle, idx) => <Accordion
                key={idx}
                expanded={true}>
                <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header">
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center", p: 1 }}>
                        {MuscleGroupsInfo[muscle].locale}
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    {GetExercisesByMuscle(muscle).map((exercise, index) => <Box key={index}>
                        <Button
                            endIcon={props.isSelected(exercise.id) ? <CheckIcon /> : <div></div>}
                            color="secondary"
                            onClick={(e) => props.handleCheckItem(exercise.id)}
                            fullWidth
                            sx={{ justifyContent: "space-between", textAlign: "left" }}
                            disableRipple>
                            {exercise.title}
                        </Button>
                    </Box>)}
                </AccordionDetails>
            </Accordion>)}
        </Box>

        <AddButton text={`Применить`} onClick={props.onSave} isBottom={true} />
    </div>
}

export default ExercisesSelector;