import { ActionReducerMap } from "@ngrx/store";
import { UiEffects } from "./effects/ui.effects";
import { UiState } from "./models/ui.models";
import { uiReducer } from "./reducers/ui.reducers";

export interface AppState {
    uiState: UiState
};

export const reducers: ActionReducerMap<AppState> = {
    uiState: uiReducer
};

export const effects = [UiEffects];