import { createReducer, on } from "@ngrx/store";
import { createCollection, addCollectionStatus } from "../actions/ui.actions";
import { AddCollectionStatus, Collection, UiState } from "../models/ui.models";

export const initialState: UiState = {
    collections: [],
    addCollectionStatus: AddCollectionStatus.Complete,
    blockScreen: false,
};

export const uiReducer = createReducer(
    initialState,
    on(createCollection, (state, collection: Collection) => ({
        ...state,
        collections: [...state.collections, collection]
    })),
    on(addCollectionStatus, (state, {addCollectionStatus, blockScreen}) => ({
        ...state,
        addCollectionStatus: addCollectionStatus,
        blockScreen: blockScreen
    })),
);