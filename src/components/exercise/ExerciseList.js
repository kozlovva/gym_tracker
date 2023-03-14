import { Accordion as MuiAccordion, AccordionDetails as MuiAccordionDetails, AccordionSummary as MuiAccordionSummary, Badge, Button, Typography, Paper } from "@mui/material";
import React, { useState } from "react";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Box, styled } from "@mui/system";
import { ModalTypeInfo, MuscleGroupsEnum, MuscleGroupsInfo, MuscleGroupEnum, MuscleGroupInfo } from "../Constants";
import { CountExercisesByMuscle, GetExercisesByMuscle } from "../../api/ExercisesAPI";
import { GetMuscleByGroup } from "../service/MuscleService";

const Accordion = styled((props) => (
    <MuiAccordion elevation={0} {...props} />
))(({ theme }) => ({
    '&:not(:last-child)': {
        borderBottom: 0,
    }
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    padding: theme.spacing(1),
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

    const calcCount = (muscle) => {
        return CountExercisesByMuscle(muscle);
    }
    
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        justifyContent: "center"
    }}>
        {MuscleGroupEnum.map((value, idx) =>
            <Paper key={idx}>
                <Typography sx={{p: 1}} variant="h5" color="secondary">{MuscleGroupInfo[value].locale}</Typography>
                {GetMuscleByGroup(value).map((muscle, index) => <Accordion
                    key={index}
                    expanded={expanded == muscle}
                    onChange={handleChangeExpanded(muscle)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header">
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center", pr: 2 }}>
                            {MuscleGroupsInfo[muscle].locale}
                            <Badge showZero badgeContent={calcCount(muscle)} color="secondary" sx={{ zIndex: 0 }}></Badge>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        {GetExercisesByMuscle(muscle).map((exercise, index) => <Box key={index}>
                            <Button
                                color="secondary"
                                onClick={(e) => onClickToExercise(e, exercise)}
                                fullWidth
                                sx={{ justifyContent: "flex-start", textAlign: "left" }}
                                disableRipple>
                                {exercise.title}
                            </Button>
                        </Box>)}
                    </AccordionDetails>
                </Accordion>)}
            </Paper>

        )}
        {/* {MuscleGroupsEnum.map((muscle, idx) => )
        } */}
    </Box>
}

export default ExerciseList;