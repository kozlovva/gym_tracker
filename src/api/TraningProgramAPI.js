export const GetTraningPrograms = () => {
    var items = localStorage.getItem("traning_programs");
    return items != null ? JSON.parse(items) : [];
}

export const SetTraningPrograms = (traningPrograms) => {
    console.log("Update traning program in local storage...")
    localStorage.setItem("traning_programs", JSON.stringify(traningPrograms))
}

export const AddTraningProgram = exercise => {
    const items = GetTraningPrograms();
    items.push(exercise);
    SetTraningPrograms(items);
}

export const RemoveTraningProgram = id => {
    const items = GetTraningPrograms().filter(exercise => exercise.id != id);
    SetTraningPrograms(items);
}

export const UpdateTraningProgram = exercise => {
    const items = GetTraningPrograms().map(e => {
        if(e.id == exercise.id) {
            
            return exercise;
        }

        return e;
    })
    SetTraningPrograms(items);
}


export const GetTraningProgramById = id => {
    const exercises = GetTraningPrograms();
    return exercises.find(e => e.id == id); 
}