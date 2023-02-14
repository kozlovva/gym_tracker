export const GetTraningPrograms = () => {
    var items = localStorage.getItem("traning_programs");
    return items != null ? JSON.parse(items) : [];
}

export const SetTraningPrograms = (traningPrograms) => {
    console.log("Update traning program in local storage...")
    localStorage.setItem("traning_programs", JSON.stringify(traningPrograms))
}