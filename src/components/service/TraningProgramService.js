import { GetTraningPrograms } from "../../api/TraningProgramAPI"

export const GetTraningProgramById = id => {
    return GetTraningPrograms().find(e => e.id == id);
}