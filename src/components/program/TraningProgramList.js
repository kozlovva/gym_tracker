import { Grid } from '@mui/material';
import React from 'react';
import { GetTraningPrograms } from '../../api/TraningProgramAPI';
import TraningProgramInfo from './TraningProgramInfo';


const TraningProgramList = (props) => {
    return <Grid container spacing={2}>
        {GetTraningPrograms().map((program, idx) => <Grid key={idx} item xs={12}>
            <TraningProgramInfo item={program} onClick={props.onClick}/>
        </Grid>)}
    </Grid>
}
 
export default TraningProgramList;