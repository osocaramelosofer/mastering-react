
export interface EditTodo extends Todo {
    isEditing: boolean
}
export interface Todo {
    id: number
    title: string
    description?: string
    status: boolean
}

export enum SelectValues {
    All = 'All',
    Done = 'Completed',
    Undone = 'UnCompleted'
}
