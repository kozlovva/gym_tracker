import { GetWorkouts, SetWorkouts, GetWorkoutById as ById } from "../../api/WorkoutAPI";
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
                    weight: 0,
                    completed: false
                }
            })
        }
    })

    const items = GetWorkouts();
    items.push(traning);
    SetWorkouts(items);
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
    SetWorkouts(items.map(item => {
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
    workout.volume = workout.exercises
        .reduce((result, exercise) => result + CalcExerciseVolume(exercise), 0);
    workout.progress = CalcProgressInPercent(workout);
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

export const IsNew = workout => {
    return workout.status == "NEW";
}

export const IsActive = workout => {
    return workout.status == "ACTIVE";
}

export const IsCompleted = workout => {
    return workout.status == "COMPLETED";
}

export const CalcExerciseVolume = workoutExercise => {
    let result = workoutExercise.sets
        .filter(set => set.completed)
        .reduce((sum, set) => sum + set.repeats * set.weight, 0);
    return result;
}

export const CalcProgressInPercent = workout => {
    let countOfSets = GetWorkoutSetsCount(workout);
    let completedSets = workout.exercises.reduce((result, exercise) => result + CalcCompletedSets(exercise), 0)
    console.log(`${countOfSets} - ${completedSets}`)
    return ((completedSets / countOfSets) * 100).toFixed(0)
}

export const CalcCompletedSets = workoutExercise => {
    return workoutExercise.sets.filter(set => set.completed).length
}

export const GetWorkoutSetsCount = workout => {
    return workout.exercises.reduce((result, exercise) => result + exercise.sets.length, 0)
}

export const GetWorkoutsByDateRange = range => {
    return GetWorkouts()
        .filter(workout => { 
            const endAt = new Date(workout.endAt);
            if (endAt >= range.from && endAt <= range.to) {
                return workout;
            }
        })
}