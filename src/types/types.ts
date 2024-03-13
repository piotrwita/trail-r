export interface Task {
    id: number;
    text: string;
    checked: boolean;
    category?: Category;//
}

export type Category = 'general'|'gym'|'work';