import { Box } from "@mui/material";
import React, { useState } from "react";
import AddButton from "../base/AddButton";
import Modal from "../base/Modal";
import { ModalTypeAdd, ModalTypeInfo } from "../Constants";
import ExerciseInfo from "../exercise/ExerciseInfo";
import ExerciseList from "../exercise/ExerciseList";

const defaultModalState = {
    open: false,
    type: null,
    exercise: null,
    title: null
};

const ExercisesScene = props => {
    const [modalInfo, setModalInfo] = useState(defaultModalState);

    const onChangeModal = (e, type, exercise) => {
        if (modalInfo.open) {
            setModalInfo(defaultModalState)
        } else {
            setModalInfo({
                open: true,
                type: type,
                exercise: exercise,
                title: type == ModalTypeAdd ? "Создание упражнения" : null
            })
        }
    }

    return <Box sx={{
        height: "100%", overflow: "scroll",
    }}>
        <ExerciseList onClick={onChangeModal} />
        <Modal
            open={modalInfo.open}
            onClose={(e) => onChangeModal(e, null, null)} t
            title={modalInfo.title}>
            {modalInfo.type == ModalTypeInfo && <ExerciseInfo
                title={modalInfo.exercise.title}
                partOfBody={modalInfo.exercise.partOfBody} />}
        </Modal>

        <AddButton text="Создать упражнение" onClick={(e) => onChangeModal(e, ModalTypeAdd, null)} />
    </Box>
}

export default ExercisesScene;