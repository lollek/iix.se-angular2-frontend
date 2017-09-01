import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {NoteRef, Note} from "./note.model";
import {HttpClient} from "../common/http-client.service";

@Injectable()
export class NotesService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    list(): Observable<NoteRef[]> {
        return this.httpClient.get('api/notes')
            .map((response: Response) => response.json() as Array<NoteRef>);
    }

    get(id: number): Observable<Note> {
        return this.httpClient.get(`api/notes/${id}`)
            .map((response: Response) => response.json() as Note);
    }

    save(note: Note): Observable<Note> {
        return this.httpClient.post(`api/notes`, note)
            .map((response: Response) => response.json() as Note);
    }

    update(note: Note): Observable<Note> {
        return this.httpClient.put(`api/notes/${note.id}`, note)
            .map((response: Response) => response.json() as Note);
    }

    remove(note: Note): Observable<any> {
        return this.httpClient.delete(`api/notes/${note.id}`);
    }
}
