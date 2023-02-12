import { Accordion as MuiAccordion, AccordionDetails as MuiAccordionDetails, AccordionSummary as MuiAccordionSummary, Badge, Button } from "@mui/material";
import React, { useState } from "react";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Box, styled } from "@mui/system";
import { ModalTypeInfo, MuscleGroupsEnum, MuscleGroupsInfo } from "../Constants";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
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
    backgroundColor: theme.palette.primary.light,
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
    const [expanded, setExpanded] = useState(null)

    const handleChangeExpanded = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const onClickToExercise = (e, exercise) => {
        e.stopPropagation();
        props.onClick(e, ModalTypeInfo, exercise);
    }

    const calcCount = (type) => {
        if (props.exercises == null)
            return 0;
        return props.exercises[type] == undefined ? 0 : props.exercises[type].length;
    }

    return <div>
        {MuscleGroupsEnum.map((type, idx) => <Accordion
            key={idx}
            expanded={expanded == type}
            onChange={handleChangeExpanded(type)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header">
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center", pr: 2 }}>
                    {MuscleGroupsInfo[type].locale}
                    <Badge showZero badgeContent={calcCount(type)} color="secondary"></Badge>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                {(props.exercises != null && props.exercises[type] != undefined) && props.exercises[type].map((exercise, index) => <Box key={index}>
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