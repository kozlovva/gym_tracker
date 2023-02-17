const DatabaseName = "workout";

export const GetWorkouts = () => {
    var items = localStorage.getItem(DatabaseName);
    return items ? JSON.parse(items) : [];
}


export const SetWorkouts = items => {
    localStorage.setItem(DatabaseName, JSON.stringify(items))
}

export const GetWorkoutById = id => {
    return GetWorkouts().find(e => e.id == id);
}