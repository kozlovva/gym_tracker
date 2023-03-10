import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FitbitIcon from '@mui/icons-material/Fitbit';
import ListAltIcon from '@mui/icons-material/ListAlt';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { Person } from "@mui/icons-material";

const Navigation = props => {
    return <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation value={props.activeScene} onChange={props.handleChange} showLabels>
            <BottomNavigationAction value="traning-programs" icon={<ListAltIcon />} />
            <BottomNavigationAction value="exercises" icon={<FitbitIcon />} />
            <BottomNavigationAction value="traning" icon={<FitnessCenterIcon />} />
            <BottomNavigationAction value="progress" icon={<QueryStatsIcon />} />
            <BottomNavigationAction value="account" icon={<Person />} />
        </BottomNavigation>
    </Paper>
}

export default Navigation;