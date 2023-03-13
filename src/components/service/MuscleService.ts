import { MuscleEnum } from "../../types";
import { MuscleGroupsInfo } from "../Constants";

export type IGetMuscleGroup = (group: Number) => MuscleEnum[]

export const GetMuscleByGroup = (group: string) => {
    return Object.entries(MuscleGroupsInfo)
        .filter(([key, value]) => {
            if (value.group == group)
                return true;
        })
        .map(([key, value]) => key)
}