import { GetExerciseById } from "../../api/ExercisesAPI";
import { GetTraningPrograms } from "../../api/TraningProgramAPI"

export const GetTraningProgramById = id => {
    return GetTraningPrograms().find(e => e.id == id);
}

export const GetUniqueMuscleGroups = program => {
    const res = [...new Set(program.exercises.map(item => {
        const exercise = GetExerciseById(item.id);
        return exercise.muscle;
    }))]
    console.log(res);
    return res;
}