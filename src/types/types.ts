export interface Task {
    id: number;
    text: string;
    checked: boolean;
    category?: Category;//
}

export type Category = CategoryOfTask.GENERAL|CategoryOfTask.GYM|CategoryOfTask.WORK;

export enum CategoryOfTask {
    GENERAL='general',
    GYM='gym',
    WORK='work'
}