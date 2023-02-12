export const GetExercises = () => {
    var items = localStorage.getItem("exercises");
    return JSON.parse(items);
}

export const SetExercises = exercises => {
    localStorage.setItem("exercises", JSON.stringify(exercises))
}