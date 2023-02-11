import { Box, Typography } from '@mui/material';
import React from 'react';

const TextWithIcon = (props) => {
    return <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        {props.icon}
        <Typography variant="caption" gutterBottom sx={{ mr: 1, mb: 0, lineHeight: 0 }}>{props.text}</Typography>
    </Box>
}

export default TextWithIcon;