import { Dialog, DialogContent, DialogTitle, IconButton, Slide, SliderProps, Typography } from '@mui/material';
import React, { ReactElement, ReactNode } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';

interface Props {
    open: boolean,
    title: string,
    onClose(): void,
    children: any
}

const Transition = React.forwardRef<unknown, TransitionProps & {
    children: React.ReactElement
}>((props, ref) => {
    return <Slide direction="up" ref={ref} {...props}  />;
});

const Modal = ({ open, title, onClose, children }: Props) => {
    return <Dialog
        open={open}
        TransitionComponent={Transition}
        PaperProps={{
            sx: {
                height: "100%",
                width: "100%",
                m: 0,
                position: "fixed",
                bottom: 0,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0
            }
        }}>
        <DialogTitle sx={{ pb: 4 }}>
            {title}
            <IconButton
                aria-label="close"
                onClick={onClose}
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
            {children}
        </DialogContent>
    </Dialog>
}

export default Modal;