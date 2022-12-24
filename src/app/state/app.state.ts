import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./models/ui.models";
import { uiReducer } from "./reducers/ui.reducers";

export const reducers: ActionReducerMap<AppState> = {
    uiState: uiReducer
}