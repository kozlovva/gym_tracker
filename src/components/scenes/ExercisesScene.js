import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GetExercises, SetExercises } from "../../api/ExercisesAPI";
import AddButton from "../base/AddButton";
import Modal from "../base/Modal";
import { ModalTypeAdd, ModalTypeInfo } from "../Constants";
import ExerciseInfo from "../exercise/ExerciseInfo";
import ExerciseList from "../exercise/ExerciseList";

const defaultModalState = {
    open: false,
    type: null,
    title: null
};

const ExercisesScene = props => {
    const [modalInfo, setModalInfo] = useState(defaultModalState);
    const [selectedExercice, setSelectedExercise] = useState(null);
    const [exercises, setExercises] = useState(null)

    useEffect(() => {
        var items = GetExercises();
        setExercises(items);
    }, [])

    useEffect(() => {
        if (exercises != undefined && exercises != null) {
            console.log("Update local storage...")
            SetExercises(exercises)
        }
    }, [exercises])

    const handleChangeExercise = (e, field) => {
        var exersice = selectedExercice;
        exersice[field] = e.target.value;
        setSelectedExercise({ ...exersice });
    }

    const removeExercise = () => {
        setExercises({
            ...exercises, 
            [selectedExercice.muscle]: exercises[selectedExercice.muscle].filter(e => e.id != selectedExercice.id)
        })
        closeModal();
    }

    const closeModal = () => {
        setModalInfo(defaultModalState);
        setSelectedExercise(null)
    }

    const onChangeModal = (e, type, exercise) => {
        if (modalInfo.open) {
            closeModal();
        } else {
            setModalInfo({
                open: true,
                type: type,
                title: type == ModalTypeAdd ? "Создание упражнения" : null
            });
            setSelectedExercise({ ...exercise });
        }
    }

    return <Box sx={{
        height: "100%", overflow: "scroll",
    }}>
        <ExerciseList onClick={onChangeModal} exercises={exercises} />
        <Modal
            open={modalInfo.open}
            onClose={(e) => onChangeModal(e, null, null)}
            title={modalInfo.title}>
            {modalInfo.type == ModalTypeInfo && <ExerciseInfo
                onChange={handleChangeExercise}
                exercise={selectedExercice}
                onRemove={removeExercise} />}
        </Modal>

        <AddButton text="Создать упражнение" onClick={(e) => onChangeModal(e, ModalTypeAdd, null)} />
    </Box>
}

export default ExercisesScene;