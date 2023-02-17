export const ParseInt = value => {
    if (value == null || value == "" || value == undefined)
        return null;
    else parseInt(value)
}