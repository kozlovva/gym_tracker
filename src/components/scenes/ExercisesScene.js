import { Box } from "@mui/material";
import React, { useState } from "react";
import { AddExercises, RemoveExercises, UpdateExercise } from "../../api/ExercisesAPI";
import MainButton from "../base/MainButton";
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
    const [selectedItem, setSelectedItem] = useState(null);

    const handleChangeExercise = (e, field) => {
        var item = selectedItem;
        item[field] = e.target.value;
        setSelectedItem({ ...item });
    }

    const removeExercise = () => {
        RemoveExercises(selectedItem.id)
        closeModal();
    }

    const closeModal = () => {
        setModalInfo(defaultModalState);
        setSelectedItem(null)
    }

    const onChangeModal = (e, type, item) => {
        if (modalInfo.open) {
            closeModal();
        } else {
            setModalInfo({
                open: true,
                type: type,
                title: type == ModalTypeAdd ? "Создание упражнения" : null
            });
            setSelectedItem({ ...item });
        }
    }

    const saveExercise = (e) => {
        UpdateExercise(selectedItem);
        closeModal();
    }

    const addExeecise = (e) => {
        AddExercises(selectedItem);
        closeModal();
    }

    return <div>
        <ExerciseList onClick={onChangeModal} />
        <Modal
            open={modalInfo.open}
            onClose={(e) => onChangeModal(e, null, null)}
            title={modalInfo.title}>
            {modalInfo.type == ModalTypeInfo && <ExerciseInfo
                onChange={handleChangeExercise}
                exercise={selectedItem}
                onRemove={removeExercise}
                onSave={saveExercise} />}
            {modalInfo.type == ModalTypeAdd && <CreateExercise
                onChange={handleChangeExercise}
                exercise={selectedItem}
                onSave={addExeecise} />}
        </Modal>

        <MainButton text="Создать упражнение" onClick={(e) => onChangeModal(e, ModalTypeAdd, DefaultExercise())} />
    </div>
}

export default ExercisesScene;