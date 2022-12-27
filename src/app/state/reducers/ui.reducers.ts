import { createReducer, on } from "@ngrx/store";
import { Collection, UiState } from "../models/ui.models";
import {
    upsertCollection,
    deleteTask,
    revertTaskCompleteStatus,
    createTask,
    loadCollections,
    deleteCollection,
    setCollectionFavourite,
} from "../actions/ui.actions";
import {
    deleteTaskInCollection,
    revertCompleteStatus,
    createTaskInCollection,
    updateCollectionFavourite,
} from "./reducer.helpers";

const initialState: UiState = {
    collections: [],
};

export const uiReducer = createReducer(
    initialState,
    on(upsertCollection, (state, collection: Collection) => ({
        ...state,
        collections: [...state.collections.filter((existingCollection: Collection) => 
            existingCollection.id != collection.id),
            collection
        ]
    })),
    on(deleteCollection, (state, { collectionId }) => ({
        ...state,
        collections: state.collections
            .filter((collection: Collection) => collection.id != collectionId)
    })),
    on(setCollectionFavourite, (state, { collectionId, isFavourite }) => ({
        ...state,
        collections: updateCollectionFavourite(collectionId, state.collections, isFavourite)
    })),
    on(deleteTask, (state, { collectionId, taskId }) => ({
        ...state,
        collections: [
            ...state.collections.filter((collection: Collection) => collection.id != collectionId),
            deleteTaskInCollection(
                taskId,
                state.collections.find((collection: Collection) => collection.id == collectionId)!
            )
        ]
    })),
    on(revertTaskCompleteStatus, (state, { collectionId, taskId }) => ({
        ...state,
        collections: [
            ...state.collections.filter((collection: Collection) => collection.id != collectionId),
            revertCompleteStatus(
                taskId,
                state.collections.find((collection: Collection) => collection.id == collectionId)!
            )
        ]
    })),
    on(createTask, (state, { collectionId, task }) => ({
        ...state,
        collections: [
            ...state.collections.filter((collection: Collection) => collection.id != collectionId),
            createTaskInCollection(
                task,
                state.collections.find((collection: Collection) => collection.id == collectionId)!
            )
        ]
    })),
    on(loadCollections, (state, { collections }) => ({
        ...state,
        collections: collections
    })),
);