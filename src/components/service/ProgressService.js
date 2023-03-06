import { FormatDate, GetDateRangeByPeriod } from "../../utils/DateUtils";
import { GetWorkoutsByDateRange } from "./WorkoutService";

export const GetStatisticByPeriod = period => {
    let dateRange = GetDateRangeByPeriod(period);
    const workouts = GetWorkoutsByDateRange(dateRange);
    const max = Math.max(...workouts.map(workout => workout.volume))
    return {
        workoutCount: workouts.length,
        fullCompleteCount: workouts.filter(workout => workout.progress == 100).length,
        tonnageData: {
            max: max,
            data: workouts.map(workout => {
                return {
                    date: FormatDate(new Date(workout.endAt)),
                    volume: workout.volume
                }
            })
        }
    }
}