import { Button } from '@mui/material';
import React from 'react';

const RemoveEntityButton = props => {
    return <Button
        onClick={props.onClick}
        fullWidth
        color="error"
        sx={{ mt: 1, pl: 0 }}
        disableRipple>
            {props.text}
    </Button>
}

export default RemoveEntityButton;