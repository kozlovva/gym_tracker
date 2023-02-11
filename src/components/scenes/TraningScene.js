import { Divider } from "@mui/material";
import React, { useState } from "react";
import AddButton from "../base/AddButton";
import TraningCard from "../traning/TraningCard";

const TraningScene = props => {
    const [tranings, setTranings] = useState([{
        "title": "Толкай",
        "date": "2022-10-10",
        "status": "ACTIVE",
        "duration": "120"
    }])

    return <div>
        {tranings.map((traning, idx) =>
            <TraningCard
                key={idx}
                title={traning.title}
                date={traning.date}
                duration={traning.duration} />
        )}
        <Divider light sx={{mt: 2}}></Divider>
        <AddButton text="Добавить тренировку" />
    </div>
}

export default TraningScene;