
export interface Logger{
    logCreationDate: () => void;
}

export class TaskClass implements Logger {
    name: string = "nowe zadanie";
    done: boolean = true;
    private createAt: Date = new Date();

    constructor(name: string, done: boolean) {
        this.name = name;
        this.done = done;
    }

    logCreationDate() {
        console.log(`Task stworzony ${this.createAt}`)
    }
}
