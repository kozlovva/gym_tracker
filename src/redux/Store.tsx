import { configureStore } from "@reduxjs/toolkit"
import { listenerMiddleware } from "./MiddlewareListener";
import ThemeSlice from "./ThemeSlice"

const loadState = () => {
    try {
        const state = localStorage.getItem("app-settings");
        if (state != undefined)
            return JSON.parse(state);
        else
            return {
                themePalette: {
                    palette: 'light'
                }
            }
    } catch (e) {
        return {
            themePalette: {
                palette: 'light'
            }
        }
    }
}

const store = configureStore({
    reducer: {
        themePalette: ThemeSlice
    },
    preloadedState: loadState(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listenerMiddleware.middleware)
})

export default store;

export type RootState = ReturnType<typeof store.getState>;