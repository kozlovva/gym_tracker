import { Box } from "@mui/material";
import React, { useState } from "react";
import { AddExercises, RemoveExercises, UpdateExercise } from "../../api/ExercisesAPI";
import AddButton from "../base/AddButton";
import Modal from "../base/Modal";
import { DefaultExercise, ModalTypeAdd, ModalTypeInfo } from "../Constants";
import CreateExercise from "../exercise/CreateExercise";
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

    const handleChangeExercise = (e, field) => {
        var exercise = selectedExercice;
        exercise[field] = e.target.value;
        setSelectedExercise({ ...exercise });
    }

    const removeExercise = () => {
        RemoveExercises(selectedExercice.id)
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

    const saveExercise = (e) => {
        UpdateExercise(selectedExercice);
        closeModal();
    }

    const addExeecise = (e) => {
        AddExercises(selectedExercice);
        closeModal();
    }

    return <Box sx={{
        height: "100%", overflow: "scroll",
    }}>
        <ExerciseList onClick={onChangeModal} />
        <Modal
            open={modalInfo.open}
            onClose={(e) => onChangeModal(e, null, null)}
            title={modalInfo.title}>
            {modalInfo.type == ModalTypeInfo && <ExerciseInfo
                onChange={handleChangeExercise}
                exercise={selectedExercice}
                onRemove={removeExercise}
                onSave={saveExercise} />}
            {modalInfo.type == ModalTypeAdd && <CreateExercise
                onChange={handleChangeExercise}
                exercise={selectedExercice}
                onSave={addExeecise} />}
        </Modal>

        <AddButton text="Создать упражнение" onClick={(e) => onChangeModal(e, ModalTypeAdd, DefaultExercise)} />
    </Box>
}

export default ExercisesScene;