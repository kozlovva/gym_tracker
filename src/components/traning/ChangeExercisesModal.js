import React from 'react';
import Modal from "../base/Modal";
import ExercisesSelector from "../exercise/ExercisesSelector";

const ChangeExercisesModal = ({isOpen, onClose, handleCheckItem, isSelected, selected, onSaveExercises, selectedExercises}) => {
    return <Modal
        open={isOpen}
        onClose={onClose}
        title="Изменить упражнения">
        <ExercisesSelector
            handleCheckItem={handleCheckItem}
            selectedExercises={selectedExercises}
            isSelected={isSelected}
            selected={selected}
            onSave={onSaveExercises} />
    </Modal>
}

export default ChangeExercisesModal;