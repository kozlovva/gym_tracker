import {v4 as uuidv4} from 'uuid';

export const MuscleGroupsInfo = {
    "BICEPS": {
        "locale": "Бицепс"
    },
    "TRICEPS": {
        "locale": "Трицепс"
    },
    "QUADS": {
        "locale": "Передняя поверхность бедра"
    },
    "GLUTES": {
        "locale": "Ягодицы"
    },
    "ABS": {
        "locale": "Пресс"
    },
    "CHEST": {
        "locale": "Грудь"
    },
    "SHOULDERS": {
        "locale": "Плечи"
    },
    "HAMSTRINGS": {
        "locale": "Задняя поверхность бедра"
    },
    "FOREARMS": {
        "locale": "Предплечья"
    },
    "NECK": {
        "locale": "Шея"
    },
    "LATS": {
        "locale": "Широчайшие"
    },
    "LOWER_BACK": {
        "locale": "Разгибатели спины/Поясница"
    },
    "MIDDLE_BACK": {
        "locale": "Середина спины"
    },
    "TRAPS": {
        "locale": "Трапеции"
    }
};

export const MuscleGroupsEnum = [
    "BICEPS", 
    "TRICEPS", 
    "QUADS", 
    "GLUTES", 
    "ABS", 
    "CHEST", 
    "SHOULDERS", 
    "HAMSTRINGS", 
    "FOREARMS", 
    "NECK", 
    "LATS", 
    "LOWER_BACK", 
    "MIDDLE_BACK", 
    "TRAPS"
];

export const DefaultExercises = [
    {
        "id": "1",
        "title": "Подъем штанги на бицепс",
        "muscle": "BICEPS"
    },
    {
        "id": "18",
        "title": "Подтягивания обратным хватом",
        "muscle": "BICEPS"
    },
    {
        "id": "19",
        "title": "Подъем гантелей в скамье Скотта",
        "muscle": "BICEPS"
    },
    {
        "id": "15",
        "title": "Молотки с гантелями",
        "muscle": "BICEPS"
    }, 
    {
        "id": "2",
        "title": "Французский жим со штангой",
        "muscle": "TRICEPS"
    }, 
    {
        "id": "20",
        "title": "Французский со штангой",
        "muscle": "TRICEPS"
    }, 
    {
        "id": "21",
        "title": "Жим лежа узким хватом",
        "muscle": "TRICEPS"
    },
    {
        "id": "22",
        "title": "Разгибания на трицепс в верхнем блоке",
        "muscle": "TRICEPS"
    }, 
    {
        "id": "3",
        "title": "Приседания со штангой",
        "muscle": "QUADS"
    }, 
    {
        "id": "23",
        "title": "Жим ногами",
        "muscle": "QUADS"
    }, 
    {
        "id": "24",
        "title": "Разгибания в блоке на квадрицепс",
        "muscle": "QUADS"
    },
    {
        "id": "25",
        "title": "Выпады с гантелей",
        "muscle": "QUADS"
    },  
    {
        "id": "4",
        "title": "Отведения ноги в блоке",
        "muscle": "GLUTES"
    }, 
    {
        "id": "26",
        "title": "Ягодичный мост",
        "muscle": "GLUTES"
    }, 
    {
        "id": "27",
        "title": "Глубокие приседания с широкой постановкой ног",
        "muscle": "GLUTES"
    }, 
    {
        "id": "28",
        "title": "Отведение ног в стороны в тренажере",
        "muscle": "GLUTES"
    }, 
    {
        "id": "5",
        "title": "Скручивания в римском стуле",
        "muscle": "ABS"
    }, 
    {
        "id": "29",
        "title": "Скручивания в висе на перекладине",
        "muscle": "ABS"
    }, 
    {
        "id": "6",
        "title": "Жим со штангой лежа",
        "muscle": "CHEST"
    }, 
    {
        "id": "30",
        "title": "Жим со штангой лежа на наклонной скамье",
        "muscle": "CHEST"
    }, 
    {
        "id": "31",
        "title": "Бабочка",
        "muscle": "CHEST"
    }, 
    {
        "id": "7",
        "title": "Махи с шагтелями в стороны",
        "muscle": "SHOULDERS"
    },
    {
        "id": "16",
        "title": "Армейский жим",
        "muscle":"SHOULDERS"
    },
    {
        "id": "17",
        "title": "Жим гантелей сидя",
        "muscle": "SHOULDERS"
    }, 
    {
        "id": "8",
        "title": "Румынская тяга",
        "muscle": "HAMSTRINGS"
    }, 
    {
        "id": "9",
        "title": "Обезьяний хват",
        "muscle": "FOREARMS"
    }, 
    {
        "id": "10",
        "title": "Скричивания шеи с блином",
        "muscle": "NECK"
    }, 
    {
        "id": "11",
        "title": "Подтягивания",
        "muscle": "LATS"
    }, 
    {
        "id": "12",
        "title": "Экстензия",
        "muscle": "LOWER_BACK"
    }, 
    {
        "id": "13",
        "title": "Тяга нижнего блока",
        "muscle": "MIDDLE_BACK"
    }, 
    {
        "id": "14",
        "title": "Шраги с гантелями",
        "muscle": "TRAPS"
    }
]

export const ModalTypeInfo = "INFO";
export const ModalTypeAdd = "ADD";

export const DefaultExercise = () => {
    return {
        "id": uuidv4(),
        title: "",
        muscle: "BICEPS"
    }
}

export const DefaultModalState = {
    open: false,
    type: null,
    title: null
};

export const DefaultTraningProgram = () => {
    return {
        "id": uuidv4(),
        "title": "",
        "description": "",
        "exercises": []
    }
}

export const DefaultTraningPrograms = [
    {
        "id": "1",
        "title": "Грудь-бицепс",
        "description": "",
        "exercises": [
            {
                "id": "1",
                "sets": [
                    {
                        repeats: 10,
                        weight: 0,
                        complited: false
                    },
                    {
                        repeats: 10,
                        weight: 0,
                        complited: false
                    },
                    {
                        repeats: 10,
                        weight: 0,
                        complited: false
                    },
                    {
                        repeats: 10,
                        weight: 0,
                        complited: false
                    }
                ]
            }
        ]
    },
    
]

export const DefaultTraning = () =>  {
    return {
        "id": uuidv4(),
        "notes": "",
        "traningProgramId": "",
        "duration": "",
        "startAt": "",
        "endAt": "",
        "exercises": [],
        "status": "ACTIVE",
        "rejectCause": "",
        "volume": 0,
        "progress": 0
    }
}

export const Statuses = [
    "NEW", "ACTIVE", "COMPLETED", "REJECTED"
]

export const DefaultSet =() => {
    return {
        repeats: 10,
        weight: 0,
        completed: false
    } 
}

export const GenerateProgramExercise = id => {
    let setCount = 4;
    let sets = [];
    for (let i = 0; i<setCount; i++) {
        sets.push(DefaultSet())
    }
    return {
        id: id,
        sets: sets
    }
}