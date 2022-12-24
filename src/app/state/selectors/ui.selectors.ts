import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { UiState } from "../models/ui.models";

export const selectUiState = (state: AppState) => state.uiState;

export const selectAllCollections = createSelector(
    selectUiState,
    (state: UiState) => state.collections
);

export const selectAddingCollection = createSelector(
    selectUiState,
    (state: UiState) => state.addCollectionStatus
);

export const selectBlockScreen = createSelector(
    selectUiState,
    (state: UiState) => state.blockScreen
);