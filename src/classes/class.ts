export class TaskClass {
    name: string = "nowe zadanie";
    done: boolean = true;
    createAt: Date = new Date();

    constructor(name: string, done: boolean) {
        this.name = name;
        this.done = done;
    }

    logCreationDate() {
        console.log(`Task stworzony ${this.createAt}`)
    }
}
