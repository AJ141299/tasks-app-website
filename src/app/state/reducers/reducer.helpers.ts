import { Collection, Task } from "../models/ui.models";

export const deleteTaskInCollection = (taskId: string, collection: Collection): Collection => {
    return {
        ...collection,
        tasks: collection.tasks.filter((task: Task) => task.id != taskId)
    }
};

export const revertCompleteStatus = (taskId: string, collection: Collection): Collection => {
    const isComplete = collection.tasks
        .filter((task: Task) => {
            return task.id == taskId;
        })
        .at(0)
        ?.isComplete;

    return {
        ...collection,
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

export const createTaskInCollection = (task: Task, collection: Collection): Collection => {
    return {
        ...collection,
        tasks: [...collection.tasks, task]
    };
};

export const updateCollectionFavourite = (
    collectionId: string,
    collections: Collection[],
    isFavourite: boolean): Collection[] =>
{
    const favouriteUpdated: Collection = {
        ...collections.find((collection: Collection) => collection.id == collectionId)!,
        isFavourite: isFavourite
    };

    return [
        ...collections.filter((collection: Collection) => collection.id != collectionId),
        favouriteUpdated
    ];
};
