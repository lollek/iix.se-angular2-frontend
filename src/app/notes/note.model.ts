export class NoteRef {
    id?: number;
    title?: string;
    date?: string;

    constructor(
    ) {
        this.date = new Date(Date.now()).toISOString().slice(0,10);
    }
}

export class Note extends NoteRef {
    text?: string;

}

