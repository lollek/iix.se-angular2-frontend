import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {Scratch} from "./scratch.model";

@Injectable()
export class ScratchService {

    constructor(
        private http: Http
    ) {
    }

    get(): Observable<Scratch> {
        return this.http.get(`api/markdown/scratch`)
            .map((response: Response) => response.json() as Scratch);
    }

    update(scratch: Scratch): Observable<Scratch> {
        return this.http.put(`api/markdown/scratch`, scratch)
            .map((response: Response) => response.json() as Scratch);
    }
}
