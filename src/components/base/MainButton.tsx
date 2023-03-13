import React from "react";
import { Box, Button } from "@mui/material"

interface Props {
    isBottom: boolean,
    onClick(): void,
    text: string,
    sx?: object
}

const MainButton = ({isBottom, onClick, text, sx}: Props) => {
    return <Box sx={{
        position: 'fixed', 
        width: "100%", 
        bottom: isBottom ? 0 : 40, 
        right: 0, 
        pl: 1, 
        pr: 1,
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }}>
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