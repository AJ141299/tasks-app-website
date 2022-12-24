import { createAction, props } from "@ngrx/store";
import { Task, Collection } from "../models/ui.models";

export const createCollection = createAction(
    '[Collections Page] Create Collection',
    props<Collection>()
);

export const createTask = createAction(
    '[Task Page] Create Task',
    props<{collectionId: string; task: Task}>()
);

export const completeTask = createAction(
    '[Task Page] Task complete',
    props<{taskId: string}>()
);
