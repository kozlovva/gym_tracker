import { AnyAction, createListenerMiddleware, createSlice } from "@reduxjs/toolkit";
import { ThemeInitialState, ThemePalette } from "../reduxTypes";

const initialState: ThemeInitialState = {
    palette: ThemePalette.light
}

export interface ChangeThemePalette extends AnyAction {
    
}

export const ThemeSlice = createSlice({
    name: "ChangeThemePalette",
    initialState: initialState,
    reducers: {
        changePalette: (state) => {
            if (state.palette === ThemePalette.light)
                state.palette = ThemePalette.dark;
            else
                state.palette = ThemePalette.light
        }
    }
})

export const {changePalette} = ThemeSlice.actions;


export default ThemeSlice.reducer;