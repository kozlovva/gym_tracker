const DatabaseName = "traning";

export const GetTranings = () => {
    var items = localStorage.getItem(DatabaseName);
    return items ? JSON.parse(items) : [];
}


export const SetTranings = items => {
    localStorage.setItem(DatabaseName, JSON.stringify(items))
}