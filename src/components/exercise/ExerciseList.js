import { Accordion as MuiAccordion, AccordionDetails as MuiAccordionDetails, AccordionSummary as MuiAccordionSummary, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Box, styled } from "@mui/system";
import { ExercisesGrouped, ModalTypeInfo, MuscleGroupsEnum, MuscleGroupsInfo } from "../Constants";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const ExerciseList = (props) => {
    const [exercises, setExercises] = useState({})
    const [expanded, setExpanded] = useState(null)
    useEffect(() => {
        setExercises(ExercisesGrouped);
    }, [])

    const handleChangeExpanded = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const onClickToExercise = (e, exercise) => {
        e.stopPropagation();
        props.onClick(e, ModalTypeInfo, exercise);
    }

    MuscleGroupsEnum.map(m => console.log(exercises[m]))

    return <div>
        {MuscleGroupsEnum.map((type, idx) => <Accordion
            key={idx}
            expanded={expanded == type}
            onChange={handleChangeExpanded(type)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header">
                {MuscleGroupsInfo[type].locale}
            </AccordionSummary>
            <AccordionDetails>
                {exercises[type] != undefined && exercises[type].map((exercise, index) => <Box key={index}>
                    <Button
                        color="secondary"
                        onClick={(e) => onClickToExercise(e, exercise)}
                        fullWidth
                        sx={{ justifyContent: "flex-start" }}
                        disableRipple>
                        {exercise.title}
                    </Button>
                </Box>)}
            </AccordionDetails>
        </Accordion>)
        }
    </div >
}

export default ExerciseList;