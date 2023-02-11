import { Dialog, DialogContent, DialogTitle, IconButton, Paper } from "@mui/material";
import { borderRadius } from "@mui/system";
import React from "react";
import ExerciseList from "../exercise/ExerciseList";

const ExercisesScene = props => {
    return <div>
         <ExerciseList />
         <Dialog
         open={false}
         PaperProps={{
            sx: {
                height: "100%",
                width: "100%",
                m: 0,
                position: "fixed",
                bottom: 0,
                borderBottomRightRadius: 0, 
                borderBottomLeftRadius: 0
            }
         }}>
            <DialogContent sx={{}}>
                <DialogTitle>
                    <IconButton
                    aria-label="close"

                    >
                    </IconButton>
                </DialogTitle>
            </DialogContent>
         </Dialog>
    </div> 
}

export default ExercisesScene;