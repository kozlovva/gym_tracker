export type Workout = {
    id: string,
    notes?: string,
    traningProgramId: string,
    duration?: number,
    startAt: Date,
    endAt?: Date,
    exercises: ExerciseItem[],
    status: WorkoutStatus,
    rejectCause?: string,
    volume?: number,
    progress?: number
}

export enum WorkoutStatus {
    ACTIVE = "ACTIVE",
    NEW = "NEW",
    COMPLETED = "COMPLETED",
    REJECTED = "REJECTED"
}

export type WorkoutExercise = {

}

export type TraningProgram = {
    id: string,
    title: string,
    description?: string,
    exercises: ExerciseItem[]
}

export type ExerciseItem = {
    id: string,
    sets: WorkoutSet[]
}

export type WorkoutSet = {
    repeats: number,
    weight: number,
    completed: boolean
}

export type DateRange = {
    from: Date,
    to: Date
}

