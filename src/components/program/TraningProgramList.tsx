import { Grid } from '@mui/material';
import React from 'react';
import { GetTraningPrograms } from '../../api/TraningProgramAPI';
import TraningProgramCard from "./TraningProgramCard";

export interface TraningProgramProps {
    onClick(): void,
    withCount?: boolean
}

const TraningProgramList = ({
    onClick,
    withCount = false
}: TraningProgramProps) => {
    return <Grid container spacing={2}>
        {GetTraningPrograms().map((program, idx) => <Grid key={idx} item xs={6}>
            <TraningProgramCard item={program} onClick={onClick} withCount={withCount} />
        </Grid>)}
    </Grid>
}

export default TraningProgramList;