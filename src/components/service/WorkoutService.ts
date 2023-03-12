import { GetWorkouts, SetWorkouts, GetWorkoutById as ById } from "../../api/WorkoutAPI";
import { DateRange, ExerciseItem, TraningProgram, Workout, WorkoutSet, WorkoutStatus } from "../../types";
import { DatesIsEquals, FormatDate, MinutesBetweenDates } from "../../utils/DateUtils";
import { v4 as uuidv4 } from 'uuid';

type ICreateWorkout = (selectedProgram: TraningProgram) => Workout;

export const CreateWorkout: ICreateWorkout = (selectedProgram: TraningProgram) => {
    let workout: Workout = {
        id: uuidv4(),
        traningProgramId: selectedProgram.id,
        startAt: new Date(),
        duration: 0,
        exercises: [],
        status: WorkoutStatus.ACTIVE,
        volume: 0,
        progress: 0
    };

    workout.exercises = selectedProgram.exercises.map((exercise: ExerciseItem) => {
        const result: ExerciseItem = {
            id: exercise.id,
            sets: exercise.sets.map((set: WorkoutSet) => {
                const result: WorkoutSet = {
                    repeats: set.repeats,
                    weight: 0,
                    completed: false
                }
                return result;
            })
        }
        return result;
    })

    const items = GetWorkouts();
    items.push(workout);
    SetWorkouts(items);
    return workout;
}

export const GetTodayActiveWorkouts = () => {
    return GetWorkouts()
        .filter((e: Workout) => IsActive(e))
}

export const GetWorkoutHistory = (date: Date) => {
    return GetWorkouts()
        .filter((e: Workout) => {
            if (!IsActive(e) && DatesIsEquals(new Date(e.startAt), date))
                return true;

            return false;
        })
}

export const GetWorkoutById = (id: string) => {
    return ById(id);
}

export const SaveWorkout = (workout: Workout) => {
    const items = GetWorkouts();
    SetWorkouts(items.map((item: Workout) => {
        return item.id == workout.id ? workout : item
    }));
}

export const StartWorkout = (workout: Workout) => {
    workout.startAt = new Date();
    workout.status = WorkoutStatus.ACTIVE;
    SaveWorkout(workout)
    return workout;
}

export const CompleteWorkout = (workout: Workout) => {
    workout.endAt = new Date();
    workout.status = WorkoutStatus.COMPLETED;
    workout.duration = MinutesBetweenDates(new Date(workout.startAt), workout.endAt);
    workout.volume = workout.exercises
        .reduce((result: number, exercise: ExerciseItem) => result + CalcExerciseVolume(exercise), 0);
    workout.progress = CalcProgressInPercent(workout);
    SaveWorkout(workout)
    return workout;
}

export const RejectWorkout = (workout: Workout, cause: string) => {
    workout.endAt = new Date();
    workout.status = WorkoutStatus.REJECTED;
    workout.rejectCause = cause;
    workout.duration = MinutesBetweenDates(new Date(workout.startAt), workout.endAt);
    workout.volume = workout.exercises
        .reduce((result: number, exercise: any) => result + CalcExerciseVolume(exercise), 0);
    workout.progress = CalcProgressInPercent(workout);
    SaveWorkout(workout)
    return workout;
}

export const IsNew = (workout: Workout) => {
    return workout.status === WorkoutStatus.NEW;
}

export const IsActive = (workout: Workout) => {
    return workout.status === WorkoutStatus.ACTIVE;
}

export const IsCompleted = (workout: Workout) => {
    return workout.status === WorkoutStatus.COMPLETED;
}

export const IsRejected = (workout: Workout) => {
    return workout.status === WorkoutStatus.REJECTED;
}

export const CalcExerciseVolume = (workoutExercise: ExerciseItem) => {
    let result = workoutExercise.sets
        .filter((set: WorkoutSet) => set.completed)
        .reduce((sum: number, set: WorkoutSet) => sum + set.repeats * set.weight, 0);
    return result;
}

export const CalcProgressInPercent = (workout: Workout) => {
    let countOfSets = GetWorkoutSetsCount(workout);
    let completedSets = workout.exercises.reduce((result: number, exercise: ExerciseItem) => result + CalcCompletedSets(exercise), 0)
    return parseInt(((completedSets / countOfSets) * 100).toFixed(0))
}

export const CalcCompletedSets = (workoutExercise: ExerciseItem) => {
    return workoutExercise.sets.filter((set: WorkoutSet) => set.completed).length
}

export const GetWorkoutSetsCount = (workout: Workout) => {
    return workout.exercises.reduce((result: number, exercise: ExerciseItem) => result + exercise.sets.length, 0)
}

export const GetWorkoutsByDateRange = (range: DateRange) => {
    return GetWorkouts()
        .filter((workout: Workout) => {
            if (workout.endAt == undefined)
                return false;
            const endAt = new Date(workout.endAt);
            if (endAt >= range.from && endAt <= range.to) {
                return true;
            }
        })
}