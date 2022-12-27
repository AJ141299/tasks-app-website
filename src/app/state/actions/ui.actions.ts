import { createAction, props } from "@ngrx/store";
import { Task, Collection } from "../models/ui.models";

export const upsertCollection = createAction(
    '[Collections/Tasks Page] Upsert Collection',
    props<Collection>()
);

export const deleteCollection = createAction(
    '[Tasks Page] Delete Collection',
    props<{collectionId: string}>()
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

export const setCollectionFavourite = createAction(
    '[Tasks Page] Set Collection Favourite',
    props<{collectionId: string, isFavourite: boolean}>()
);
