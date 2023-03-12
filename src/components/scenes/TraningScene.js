import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GetTraningPrograms } from "../../api/TraningProgramAPI";
import MainButton from "../base/MainButton";
import Modal from "../base/Modal";
import TraningProgramCard from "../program/TraningProgramCard";
import { CreateWorkout, GetTodayActiveWorkouts, GetWorkoutHistory } from "../service/WorkoutService.ts";
import { GetTraningProgramById } from "../service/TraningProgramService";
import TraningCard from "../traning/TraningCard";
import { useNavigate } from "react-router-dom";
import DateSelector from "../base/DateSelector";

const EmptyResult = () => <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}>
    <Typography variant="caption">Пока тренировок нет</Typography>
</Box>

export const TraningScene = props => {
    const [todayTranings, setTodayTranings] = useState([])
    const [traningHistory, setTraningHistory] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date())
    const navigate = useNavigate();

    useEffect(() => {
        const todayTranings = GetTodayActiveWorkouts();
        setTodayTranings(todayTranings);
    }, [])

    useEffect(() => {
        console.log(selectedDate)
        const traningHistory = GetWorkoutHistory(selectedDate);
        setTraningHistory(traningHistory)
    }, [selectedDate])

    const onStart = async (e, modaType, traningProgram) => {
        const workout = await CreateWorkout(traningProgram);
        navigateToWorkout(workout.id)
    }

    const handleChangeOpen = () => {
        setIsOpen(!isOpen)
    }

    const closeModal = () => {
        handleChangeOpen();
    }

    const onChangeModal = () => {
        if (isOpen) {
            closeModal();
        } else {
            handleChangeOpen();
        }
    }

    const navigateToWorkout = id => {
        navigate(`/workout-process/${id}`)
    }

    const onSelectDate = newDate => {
        setSelectedDate(newDate)
    }

    return <div>
        <Typography variant='h6' align="center">Мои тренировки</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}>
            <Typography>Активные</Typography>
        </Box>
        {todayTranings.length > 0
            ? <Grid container spacing={2}>
                {todayTranings.map((traning, idx) =>
                    <Grid item key={idx} xs={12}>
                        <TraningCard
                            onClick={() => { navigateToWorkout(traning.id) }}
                            title={GetTraningProgramById(traning.traningProgramId).title}
                            {...traning}
                            duration={traning.duration} />
                    </Grid>
                )}
            </Grid>
            : <EmptyResult />}

        <Divider light sx={{ mt: 2, mb: 2 }}></Divider>

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}>
            <Typography>История</Typography>
        </Box>

        <DateSelector startDaysCount={30} endDaysCount={30} selectedDate={selectedDate} onSelectDate={onSelectDate}/>

        {traningHistory.length > 0
            ? <Grid container spacing={2}>
                {traningHistory.map((traning, idx) =>
                    <Grid item key={idx} xs={12}>
                        <TraningCard
                            title={GetTraningProgramById(traning.traningProgramId).title}
                            onClick={() => { navigateToWorkout(traning.id) }}
                            {...traning}
                        />
                    </Grid>
                )}
            </Grid>
            : <EmptyResult />}


        <Modal
            open={isOpen}
            onClose={() => onChangeModal(null)}
            title="Выбери программу тренировок">
            <Grid container spacing={2}>
                {GetTraningPrograms().map((item, idx) => <Grid item xs={12} key={idx}>
                    <TraningProgramCard
                        onClick={onStart}
                        key={idx}
                        item={item}
                        showCount={false}
                        sx={{ minHeight: "80px" }} />
                </Grid>
                )}
            </Grid>


        </Modal>

        <MainButton text="Начать тренировку!" onClick={onChangeModal} />
    </div>
}

export default TraningScene;