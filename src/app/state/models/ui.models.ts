export interface UiState {
    collections: Collection[];
}

export interface Collection {
    id: string;
    name: string;
    iconPath?: string;
    tasks: Task[];
    isFavourite: boolean;
    accentColor: string;
}

export interface Task {
    id: string;
    content: string;
    isComplete: boolean;
}
