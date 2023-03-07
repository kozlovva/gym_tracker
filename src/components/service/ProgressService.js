import { FormatDate, GetDateRangeByPeriod } from "../../utils/DateUtils";
import { GetWorkoutsByDateRange } from "./WorkoutService";

export const GetStatisticByPeriod = period => {
    let dateRange = GetDateRangeByPeriod(period);
    const workouts = GetWorkoutsByDateRange(dateRange) || [];
    const maxVolume = workouts.length && Math.max(...workouts.map(workout => workout.volume))
    const maxDuration = workouts.length && Math.max(...workouts.map(workout => workout.duration || 0))

    return {
        workoutCount: workouts.length,
        fullCompleteCount: workouts.filter(workout => workout.progress == 100).length,
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
        }
    }
}