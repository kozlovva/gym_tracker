import { Box } from '@mui/material';
import React, { useState } from 'react';
import AddButton from '../base/AddButton';
import Modal from '../base/Modal';
import { DefaultModalState, ModalTypeAdd } from '../Constants';
import TraningProgramList from '../program/TraningProgramList';

const TraningProgramScene = (props) => {

    const [modalInfo, setModalInfo] = useState(DefaultModalState);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleChangeExercise = (e, field) => {
        var item = selectedItem;
        item[field] = e.target.value;
        setSelectedItem({ ...item });
    }

    const removeExercise = () => {
        // RemoveExercises(selectedItem.id)
        closeModal();
    }

    const closeModal = () => {
        setModalInfo(DefaultModalState);
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
        // UpdateExercise(selectedItem);
        closeModal();
    }

    const addExeecise = (e) => {
        // AddExercises(selectedItem);
        closeModal();
    }

    return <Box sx={{
        height: "100%", overflow: "scroll",
    }}>
        <TraningProgramList onClick={onChangeModal}/>
        <Modal
            open={modalInfo.open}
            onClose={(e) => onChangeModal(e, null, null)}
            title={modalInfo.title}>
            {/* {modalInfo.type == ModalTypeInfo && <ExerciseInfo
                onChange={handleChangeExercise}
                exercise={selectedItem}
                onRemove={removeExercise}
                onSave={saveExercise} />}
            {modalInfo.type == ModalTypeAdd && <CreateExercise
                onChange={handleChangeExercise}
                exercise={selectedItem}
                onSave={addExeecise} />} */}
        </Modal>


        <AddButton text="Создать программу"/>


    </Box>
}
 
export default TraningProgramScene;