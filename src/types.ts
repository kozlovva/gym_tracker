import { ThemePalette } from "./reduxTypes"

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

export enum MuscleEnum {
    BICEPS = 1,
    TRICEPS = 1,
    FOREARMS = 1,
    QUADS = 2,
    GLUTES = 2,
    HAMSTRINGS = 2,
    ABS = 3,
    CHEST = 4,
    SHOULDERS = 5,
    NECK = 6,
    LATS = 6,
    LOWER_BACK = 6,
    MIDDLE_BACK = 6,
    TRAPS = 6
}

export enum MuscleGroupEnum {
    ARM = 1,
    LEGS = 2,
    CORE = 3,
    CHEST = 4,
    SHOULDERS = 5,
    BACK = 6
}

export type AppSettings = {
    palette: ThemePalette
}

