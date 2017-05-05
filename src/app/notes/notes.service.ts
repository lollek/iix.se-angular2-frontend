import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {Note, NoteRef} from "./note.model";

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
}
