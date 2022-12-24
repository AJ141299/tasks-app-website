export interface AppState {
    uiState: UiState
}

export interface UiState {
    collections: Collection[];
}

export interface Collection {
    id: string;
    title: string;
    iconPath?: string;
    tasks?: Task[];
    totalTasks?: number;
    completedTasks?: number;
}

export interface Task {
    id: string;
    content: string;
    isComplete: boolean;
}
