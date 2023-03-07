import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GetTraningPrograms } from "../../api/TraningProgramAPI";
import MainButton from "../base/MainButton";
import Modal from "../base/Modal";
import TraningProgramCard from "../program/TraningProgramCard";
import { CreateWorkout, GetTodayWorkouts, GetWorkoutHistory } from "../service/WorkoutService";
import { GetTraningProgramById } from "../service/TraningProgramService";
import TraningCard from "../traning/TraningCard";
import { useNavigate } from "react-router-dom";

const EmptyResult = () => <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}>
    <Typography variant="caption">Пока тренировок нет</Typography>
</Box>

export const TraningScene = props => {
    const [todayTranings, setTodayTranings] = useState([])
    const [traningHistory, setTraningHistory] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const todayTranings = GetTodayWorkouts();
        setTodayTranings(todayTranings);
        const traningHistory = GetWorkoutHistory();
        setTraningHistory(traningHistory)
    }, [])

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

    return <div>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}>
            <Typography>Сегодня</Typography>
        </Box>
        {todayTranings.length > 0
            ? <Grid container spacing={2}>
                {todayTranings.map((traning, idx) =>
                    <Grid item key={idx} xs={12}>
                        <TraningCard
                            status={traning.status}
                            onClick={() => {navigateToWorkout(traning.id)}}
                            title={GetTraningProgramById(traning.traningProgramId).title}
                            date={traning.startAt}
                            duration={traning.duration} />
                    </Grid>
                )}
            </Grid>
            : <EmptyResult />}



        <Divider light sx={{ mt: 2, mb: 2 }}></Divider>

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}>
            <Typography>История</Typography>
        </Box>

        {traningHistory.length > 0
            ? <Grid container spacing={2}>
                {traningHistory.map((traning, idx) =>
                    <Grid item key={idx} xs={12}>
                        <TraningCard
                            title={GetTraningProgramById(traning.traningProgramId).title}
                            date={traning.startAt}
                            duration={traning.duration} />
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