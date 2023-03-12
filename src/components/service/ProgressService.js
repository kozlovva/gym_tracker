import { GetExercisesByMuscle } from "../../api/ExercisesAPI";
import { FormatDate, GetDateRangeByPeriod } from "../../utils/DateUtils";
import { MuscleGroupsEnum } from "../Constants";
import { GetWorkoutsByDateRange, IsRejected } from "./WorkoutService.ts";

export const GetStatisticByPeriod = period => {
    let dateRange = GetDateRangeByPeriod(period);
    const workouts = GetWorkoutsByDateRange(dateRange) || [];
    const maxVolume = workouts.length && Math.max(...workouts.map(workout => workout.volume))
    const maxDuration = workouts.length && Math.max(...workouts.map(workout => workout.duration || 0))

    return {
        workoutCount: workouts.length,
        fullCompleteCount: workouts.filter(workout => workout.progress == 100).length,
        rejectedCount: workouts.filter(IsRejected).length,
        tonnageData: {
            max: maxVolume,
            data: workouts.map(workout => {
                return {
                    date: FormatDate(new Date(workout.endAt)),
                    volume: workout.volume
                }
            })
        },
        durationData: {
            max: maxDuration,
            data: workouts.map(workout => {
                return {
                    date: FormatDate(new Date(workout.endAt)),
                    duration: workout.duration
                }
            })
        },
        setsData: {
            data: GetSetsData(workouts)
        }
    }
}

const GetSetsData = workouts => {
    const result = MuscleGroupsEnum.map(muscle => {
        const res = workouts.map(workout => {
            const allExercisesByMuscleIds = GetExercisesByMuscle(muscle)
                .map(item => item.id);

            const targetSets = workout.exercises.filter(item => allExercisesByMuscleIds.includes(item.id))
                .flatMap(item => item.sets)
                .filter(set => set.completed)
            return {
                date: FormatDate(new Date(workout.endAt)),
                setsCount: targetSets.length
            }
        })
        return {
            muscle: muscle,
            data: res.filter(item => item.setsCount > 0)
        }
    })
    return result;

}