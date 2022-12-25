export interface UiState {
    collections: Collection[];
    addCollectionStatus: AddCollectionStatus;
    blockScreen: boolean;
}

export enum AddCollectionStatus {
    'Pending',
    'Complete'
}

export interface Collection {
    id: string;
    name: string;
    iconPath?: string;
    tasks: Task[];
    tasksCount: number;
    completedTasksCount: number;
    isFavourite?: boolean;
    accentColor: string;
}

export interface Task {
    id: string;
    content: string;
    isComplete: boolean;
}
