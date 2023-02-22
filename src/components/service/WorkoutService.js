import { GetWorkouts, SetWorkouts , GetWorkoutById as ById } from "../../api/WorkoutAPI";
import { FormatDate, MinutesBetweenDates } from "../../utils/DateUtils";
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

export const SaveWorkout = workout => {
    const items = GetWorkouts();
    SetWorkouts (items.map(item => {
       return item.id == workout.id ? workout : item
    }));
}

export const StartWorkout = workout => {
    workout.startAt = new Date();   
    workout.status = "ACTIVE";    
    SaveWorkout(workout)
    return workout;
}

export const CompleteWorkout = workout => {
    workout.endAt = new Date();   
    workout.status = "COMPLETED";
    workout.duration = MinutesBetweenDates(new Date(workout.startAt), workout.endAt);
    SaveWorkout(workout)
    return workout;
}

export const RejectWorkout = (workout, cause) => {
    workout.endAt = new Date();   
    workout.status = "REJECTED"; 
    workout.rejectCause = cause
    SaveWorkout(workout)
    return workout;
}