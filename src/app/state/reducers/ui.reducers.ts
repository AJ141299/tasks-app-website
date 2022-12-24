import { createReducer, on } from "@ngrx/store";
import { createCollection } from "../actions/ui.actions";
import { Collection, UiState } from "../models/ui.models";

export const initialState: UiState = {
    collections: []
};

export const uiReducer = createReducer(
    initialState,
    on(createCollection, (state, collection: Collection) => ({
        ...state,
        collections: [...state.collections, collection]
    }))
);