import { ActionReducerMap } from "@ngrx/store";
import { UiState } from "./models/ui.models";
import { uiReducer } from "./reducers/ui.reducers";

export interface AppState {
    uiState: UiState
}

export const reducers: ActionReducerMap<AppState> = {
    uiState: uiReducer
}