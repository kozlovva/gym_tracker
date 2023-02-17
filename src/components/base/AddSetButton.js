import React from 'react';
import { Button } from "@mui/material";

const AddSetButton = (props) => {
    return <Button
        size='small'
        variant='contained'
        color="secondary"
        onClick={props.onClick}>
        {props.text}
    </Button>
}

export default AddSetButton;