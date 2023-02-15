import { Grid } from '@mui/material';
import React from 'react';
import { GetTraningPrograms } from '../../api/TraningProgramAPI';
import TraningProgramCard from "../program/TraningProgramCard";


const TraningProgramList = (props) => {
    return <Grid container spacing={2}>
        {GetTraningPrograms().map((program, idx) => <Grid key={idx} item xs={12}>
            <TraningProgramCard item={program} onClick={props.onClick}/>
        </Grid>)}
    </Grid>
}
 
export default TraningProgramList;