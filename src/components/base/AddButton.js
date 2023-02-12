import React from "react";
import { Button, Paper } from "@mui/material"



const AddButton = props => {
    return <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, pb: 8, pl: 1, pr: 1 }} elevation={3}>
        <Button
            variant="contained"
            fullWidth
            color="secondary"
            sx={{ p: 2 }}
            onClick={props.onClick}>
            {props.text}
        </Button>
    </Paper>
}

export default AddButton;