import { Box } from '@mui/material';
import React, { useState } from 'react';
import { AddTraningProgram, RemoveTraningProgram, UpdateTraningProgram } from '../../api/TraningProgramAPI';
import MainButton from '../base/MainButton';
import Modal from '../base/Modal';
import { DefaultModalState, DefaultTraningProgram, ModalTypeAdd, ModalTypeInfo } from '../Constants';
import CreateTraningProgram from '../program/CreateTraningProgram';
import TraningProgramInfo from '../program/TraningProgramInfo';
import TraningProgramList from '../program/TraningProgramList';
 
export const TraningProgramScene = (props) => {
    const [modalInfo, setModalInfo] = useState(DefaultModalState);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleChangeItem = (e, field) => {
        var item = selectedItem;
        item[field] = e.target.value;
        setSelectedItem({ ...item });
    }

    const removeItem = () => {
        RemoveTraningProgram(selectedItem.id)
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
                title: type == ModalTypeAdd ? "Создание программы" : null
            });
            setSelectedItem({ ...item });
        }
    }

    const saveItem = (e) => {
        UpdateTraningProgram(selectedItem);
        closeModal();
    }

    const addItem = (e) => {
        AddTraningProgram(selectedItem);
        closeModal();
    }

    const setExercises = (exercises) => {
        console.log("Exercises", exercises);
        setSelectedItem({...selectedItem, exercises: exercises})
    }

    return <Box sx={{
        height: "100%", overflow: "scroll",
    }}>
        <TraningProgramList onClick={onChangeModal}/>
        <Modal
            open={modalInfo.open}
            onClose={(e) => onChangeModal(e, null, null)}
            title={modalInfo.title}>
            {modalInfo.type == ModalTypeInfo && <TraningProgramInfo
                onChange={handleChangeItem}
                item={selectedItem}
                onRemove={removeItem}
                onSave={saveItem}
                setExercises={setExercises} />}
            {modalInfo.type == ModalTypeAdd && <CreateTraningProgram
                onChange={handleChangeItem}
                item={selectedItem}
                onSave={addItem}
                setExercises={setExercises} />}
        </Modal>


        <MainButton text="Создать программу" onClick={(e) => onChangeModal(e, ModalTypeAdd, DefaultTraningProgram())}/>
    </Box>
}
 
export default TraningProgramScene;