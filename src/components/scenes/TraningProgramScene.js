import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AddTraningProgram, RemoveTraningProgram, UpdateTraningProgram } from '../../api/TraningProgramAPI';
import MainButton from '../base/MainButton';
import Modal from '../base/Modal';
import { DefaultModalState, DefaultTraningProgram, ModalTypeAdd, ModalTypeInfo } from '../Constants';
import CreateTraningProgram from '../program/CreateTraningProgram';
import TraningProgramInfo from '../program/TraningProgramInfo';
import TraningProgramList from '../program/TraningProgramList.tsx';
 
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

    return <div>
        <Typography variant='h6' align="center">Тренировочные программы</Typography>
        <TraningProgramList onClick={onChangeModal} withCount/>
        <Modal
            open={modalInfo.open}
            onClose={(e) => onChangeModal(e, null, null)}
            title={modalInfo.title}>
            {modalInfo.type == ModalTypeInfo && <TraningProgramInfo
                onChange={handleChangeItem}
                traningProgram={selectedItem}
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
    </div>
}
 
export default TraningProgramScene;