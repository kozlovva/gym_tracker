import { GetWorkouts, SetWorkouts , GetWorkoutById as ById } from "../../api/WorkoutAPI";
import { FormatDate } from "../../utils/DateUtils";
import { DefaultTraning } from "../Constants"

export const CreateWorkout = (selectedProgram) => {
    const traning = DefaultTraning();
    traning.traningProgramId = selectedProgram.id;
    traning.startAt = new Date();

    traning.exercises = selectedProgram.exercises.map(exercise => {
        
        return {
            id: exercise.id,
            sets: exercise.sets.map(set => {
                return {
                    repeats: set.repeats,
                    wieght: 0,
                    completed: false
                }
            })
        }
    })

    const items = GetWorkouts();
    items.push(traning);
    SetWorkouts (items);
    return traning;
}

export const GetTodayWorkouts = () => {
    var now = new Date();
    return GetWorkouts()
        .filter(e => FormatDate(new Date(e.startAt)) == FormatDate(now))
}

export const GetWorkoutHistory = () => {
    var now = new Date();
    return GetWorkouts()
        .filter(e => FormatDate(new Date(e.startAt)) != FormatDate(now))
}

export const GetWorkoutById = id => {
    return ById(id);
}