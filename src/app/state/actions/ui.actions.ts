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
    '[Task Page] Create Task',
    props<{collectionId: string; task: Task}>()
);

export const completeTask = createAction(
    '[Task Page] Task complete',
    props<{taskId: string}>()
);
