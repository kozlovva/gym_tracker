import React from "react";
import { Box, Button, Paper } from "@mui/material"

const AddButton = props => {
    console.log("is", props.isBottom)
    return <Box sx={{
        position: 'fixed', 
        width: "100%", 
        bottom: props.isBottom ? 0 : 40, 
        left: 0, 
        right: 0, 
        pl: 1, 
        pr: 1,
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }} elevation={3}>
        <Button
            variant="contained"
            fullWidth
            color="secondary"
            sx={{
                p: 2,
            }}
            onClick={props.onClick}>
            {props.text}
        </Button>
    </Box>
}

export default AddButton;