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
    console.log(date)
    return (
        [
            date.getFullYear(),
            PadTo2Digits(date.getUTCMonth() + 1),
            PadTo2Digits(date.getUTCDate()),
        ].join('-')
    );
}