import { Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography } from '@mui/material';
import React from 'react';

import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Alert = (props) => {
    return <Dialog
        open={props.open}
        TransitionComponent={Transition}
        PaperProps={{
            sx: {

            }
        }}>
        <DialogTitle sx={{ pb: 4 }}>
            {props.title}
            <IconButton
                aria-label="close"
                onClick={props.onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
        </DialogTitle>
        <DialogContent sx={{}}>
            {props.children}
        </DialogContent>
    </Dialog>
}

export default Alert;