import { Grid } from '@mui/material';
import React from 'react';
import { GetTraningPrograms } from '../../api/TraningProgramAPI';
import TraningProgramCard from "./TraningProgramCard";

export interface TraningProgramListProps {
    onClick(): void,
    withCount?: boolean
}

const TraningProgramList = ({ onClick, withCount = false }: TraningProgramListProps) => {
    return <Grid container spacing={2}>
        {GetTraningPrograms().map((program: any, idx: number) => <Grid key={idx} item xs={6}>
            <TraningProgramCard item={program} onClick={onClick} withCount={withCount} />
        </Grid>)}
    </Grid>
}

export default TraningProgramList;