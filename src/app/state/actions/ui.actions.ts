import { createAction, props } from "@ngrx/store";
import { Task, Collection, AddCollectionStatus } from "../models/ui.models";

export const createCollection = createAction(
    '[Collections Page] Create Collection',
    props<Collection>()
);

export const addCollectionStatus = createAction(
    '[Collections Page] Adding Collection',
    props<{addCollectionStatus: AddCollectionStatus, blockScreen: boolean}>()
);

export const createTask = createAction(
    '[Tasks Page] Create Task',
    props<{collectionId: string; task: Task}>()
);

export const updateTask = createAction(
    '[Tasks Page] Update Task',
    props<{collectionId: string; task: Task}>()
);

export const deleteTask = createAction(
    '[Tasks Page] Delete Task',
    props<{collectionId: string; taskId: string}>()
);

export const revertTaskCompleteStatus = createAction(
    '[Tasks Page] Task complete',
    props<{collectionId: string, taskId: string}>()
);

export const loadCollections = createAction(
    '[Collections/Tasks Page] Get Collections from Local Storage',
    props<{collections: Collection[]}>()
);
