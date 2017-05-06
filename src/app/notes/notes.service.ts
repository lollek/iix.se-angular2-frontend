import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {NoteRef, Note} from "./note.model";

@Injectable()
export class NotesService {

    constructor(
        private http: Http
    ) {
    }

    list(): Observable<NoteRef[]> {
        return this.http.get('api/notes')
            .map((response: Response) => response.json() as Array<NoteRef>);
    }

    get(id: number): Observable<Note> {
        return this.http.get(`api/notes/${id}`)
            .map((response: Response) => response.json() as Note);
    }

    save(note: Note): Observable<Note> {
        return this.http.post(`api/notes`, note)
            .map((response: Response) => response.json() as Note);
    }

    update(note: Note): Observable<Note> {
        return this.http.put(`api/notes/${note.id}`, note)
            .map((response: Response) => response.json() as Note);
    }

    remove(note: Note): Observable<any> {
        return this.http.delete(`api/notes/${note.id}`);
    }
}
