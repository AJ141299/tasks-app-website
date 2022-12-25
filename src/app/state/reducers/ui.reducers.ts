import { createReducer, on } from "@ngrx/store";
import { createCollection, addCollectionStatus, deleteTask, revertTaskCompleteStatus } from "../actions/ui.actions";
import { AddCollectionStatus, Collection, Task, UiState } from "../models/ui.models";

export const initialState: UiState = {
    collections: [],
    addCollectionStatus: AddCollectionStatus.Complete,
    blockScreen: false,
};

const deleteTaskInCollection = (taskId: string, collection: Collection): Collection => {
    return {
        id: collection.id,
        accentColor: collection.accentColor,
        completedTasksCount: collection.completedTasksCount,
        name: collection.name,
        tasksCount: collection.tasksCount - 1,
        iconPath: collection.iconPath,
        isFavourite: collection.isFavourite,
        tasks: collection.tasks.filter((task: Task) => task.id != taskId)
    }
}

const revertCompleteStatus = (taskId: string, collection: Collection): Collection => {
    return {
        id: collection.id,
        accentColor: collection.accentColor,
        completedTasksCount: collection.completedTasksCount,
        name: collection.name,
        tasksCount: collection.tasksCount - 1,
        iconPath: collection.iconPath,
        isFavourite: collection.isFavourite,
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
}

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
);