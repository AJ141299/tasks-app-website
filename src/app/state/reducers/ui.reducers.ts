import { createReducer, on } from "@ngrx/store";
import { createCollection, addCollectionStatus, deleteTask, revertTaskCompleteStatus, createTask } from "../actions/ui.actions";
import { AddCollectionStatus, Collection, Task, UiState } from "../models/ui.models";

const initialState: UiState = {
    collections: [],
    addCollectionStatus: AddCollectionStatus.Complete,
    blockScreen: false,
};

const deleteTaskInCollection = (taskId: string, collection: Collection): Collection => {
    return {
        ...collection,
        tasks: collection.tasks.filter((task: Task) => task.id != taskId)
    }
};

const revertCompleteStatus = (taskId: string, collection: Collection): Collection => {
    return {
        ...collection,
        tasksCount: collection.tasksCount - 1,
        tasks: collection.tasks.map((task: Task) => {
            if (task.id == taskId) {
                return {
                    ...task,
                    isComplete: !task.isComplete
                }
            }
            return task;
        })
    }
};

const createTaskInCollection = (task: Task, collection: Collection): Collection => {
    return {
        ...collection,
        tasks: [...collection.tasks, task]
    };
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
);