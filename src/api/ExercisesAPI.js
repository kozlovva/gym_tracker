export const GetExercises = () => {
    var items = localStorage.getItem("exercises");
    return JSON.parse(items);
}

export const SetExercises = exercises => {
    console.log("Update exercises in local storage...")
    localStorage.setItem("exercises", JSON.stringify(exercises))
}

export const GetExercisesByMuscle = muscle => {
    const items = GetExercises();
    return items.filter(exercise => exercise.muscle == muscle);
}

export const AddExercises = exercise => {
    const items = GetExercises();
    items.push(exercise);
    SetExercises(items);
}

export const RemoveExercises = id => {
    const items = GetExercises().filter(exercise => exercise.id != id);
    SetExercises(items);
}

export const UpdateExercise = exercise => {
    const items = GetExercises().map(e => {
        if(e.id == exercise.id) {
            return exercise;
        }

        return e;
    })
    SetExercises(items);
}

export const CountExercisesByMuscle = muscle => {
    return GetExercisesByMuscle(muscle).length;
}

export const GetExerciseById = id => {
    const exercises = GetExercises();
    return exercises.find(e => e.id == id); 
}