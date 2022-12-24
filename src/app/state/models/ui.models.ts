export interface UiState {
    collections: Collection[];
}

export interface Collection {
    id: string;
    title: string;
    iconPath?: string;
    tasks?: Task[];
    tasksCount?: number;
    completedTasksCount?: number;
    isFavourite?: boolean;
    accentColor: string;
}

export interface Task {
    id: string;
    content: string;
    isComplete: boolean;
}
