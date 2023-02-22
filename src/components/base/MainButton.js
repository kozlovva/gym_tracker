import React from "react";
import { Box, Button } from "@mui/material"

const MainButton = ({isBottom, onClick, text, sx}) => {
    return <Box sx={{
        position: 'fixed', 
        width: "100%", 
        bottom: isBottom ? 0 : 40, 
        left: 0, 
        right: 0, 
        pl: 1, 
        pr: 1,
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }} elevation={3}>
        <Button
            variant="contained"
            fullWidth
            color="secondary"
            sx={{
                p: 2,
                ...sx
            }}
            onClick={onClick}>
            {text}
        </Button>
    </Box>
}

export default MainButton;