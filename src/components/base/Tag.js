import React from 'react';
import { Typography } from "@mui/material";

const Tag = (props) => {
    return <Typography
        variant='caption'
        gutterBottom
        component={"div"}
        sx={{
            backgroundColor: "rgb(253, 237, 237)",
            pl: 1,
            pr: 1,
            pb: 1,
            borderRadius: "4px"
        }}>
        {props.text}
    </Typography>
}

export default Tag;