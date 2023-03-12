import { GetExerciseById } from "../../api/ExercisesAPI";
import { GetTraningPrograms } from "../../api/TraningProgramAPI"
import { ExerciseItem, TraningProgram } from "../../types";

export const GetTraningProgramById = (id: string) => {
    return GetTraningPrograms().find((e: TraningProgram) => e.id == id);
}

export const GetUniqueMuscleGroups = (program: TraningProgram) => {
    const res = [...new Set(program.exercises
        .map((item: ExerciseItem) => GetExerciseById(item.id).muscle))]
    return res;
}