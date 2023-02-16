import { GetTranings, SetTranings } from "../../api/TraningAPI";
import { FormatDate } from "../../utils/DateUtils";
import { DefaultTraning } from "../Constants"

export const CreateTraning = (selectedProgramId) => {
    const traning = DefaultTraning();
    traning.traningProgramId = selectedProgramId;
    traning.startAt = new Date();

    const items = GetTranings();
    items.push(traning);
    SetTranings(items);
    return traning;
}

export const GetTodayTranings = () => {
    var now = new Date();
    return GetTranings()
        .filter(e => FormatDate(new Date(e.startAt)) == FormatDate(now))
}

export const GetTraningHistory = () => {
    var now = new Date();
    return GetTranings()
        .filter(e => FormatDate(new Date(e.startAt)) != FormatDate(now))
}