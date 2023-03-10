import { addDays, subDays } from "date-fns";

const PadTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
}

export const FormatDateTime = (date) => {
    return (
        [
            date.getFullYear(),
            PadTo2Digits(date.getUTCMonth() + 1),
            PadTo2Digits(date.getUTCDate()),
        ].join('-') +
        ' ' +
        [
            PadTo2Digits(date.getUTCHours()),
            PadTo2Digits(date.getUTCMinutes()),
            PadTo2Digits(date.getUTCSeconds()),
        ].join(':')
    );
}

export const FormatDate = (date) => {
    return (
        [
            date.getFullYear(),
            PadTo2Digits(date.getUTCMonth() + 1),
            PadTo2Digits(date.getUTCDate()),
        ].join('-')
    );
}

export const MinutesBetweenDates = (from, to) => {
    console.log(`From ${from} - to ${to}`)
    return Math.floor((to.getTime() - from.getTime()) / 1000 / 60);
}

export const GetDateRangeByPeriod = period => {
    const date = new Date();
    if (period == "week") {
        date.setDate(date.getDate() - 7)
    }
    if (period == "year") {
        date.setDate(date.getDate() - 365)
    }
    if (period == "month") {
        date.setDate(date.getDate() - 30)
    }

    return { to: new Date(), from: date }
}

export const GetDaysByRange = (startDaysCount, endDaysCount) => {
    const now = new Date(); // get current date
    const buffer = subDays(now, startDaysCount)

    const result = [];

    for(let i = 0; i<= startDaysCount + endDaysCount; i++) {
        result.push(addDays(buffer, i))
    }

    return result;
    
}

export const DatesIsEquals = (dateLeft, dateRight) => {
    return FormatDate(dateLeft) == FormatDate(dateRight);
}