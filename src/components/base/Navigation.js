import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FitbitIcon from '@mui/icons-material/Fitbit';
import ListAltIcon from '@mui/icons-material/ListAlt';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const Navigation = props => {
    return <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation value={props.activeScene} onChange={props.handleChange} showLabels>
            <BottomNavigationAction value="traning-programs" label="Программы" icon={<ListAltIcon />} />
            <BottomNavigationAction value="traning" label="Тренировки" icon={<FitnessCenterIcon />} />
            <BottomNavigationAction value="progress" label="Прогресс" icon={<QueryStatsIcon />} />
            <BottomNavigationAction value="exercises" label="Упражнения" icon={<FitbitIcon />} />
        </BottomNavigation>
    </Paper>
}

export default Navigation;