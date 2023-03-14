import { AnyAction, createListenerMiddleware, Dispatch, ListenerEffectAPI } from "@reduxjs/toolkit";
import { RootState } from "./Store";
import { changePalette } from "./ThemeSlice";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: changePalette,
    effect: async (action: AnyAction, listenerApi) => {
        console.log(listenerApi.getOriginalState());
        console.log(action.type);
        await listenerApi.delay(1000);
        localStorage.setItem("app-settings", JSON.stringify(listenerApi.getState()))
    }
})