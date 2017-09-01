import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {Scratch} from "./scratch.model";
import {HttpClient} from "../common/http-client.service";

@Injectable()
export class ScratchService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    get(): Observable<Scratch> {
        return this.httpClient.get(`api/markdown/scratch`)
            .map((response: Response) => response.json() as Scratch);
    }

    update(scratch: Scratch): Observable<Scratch> {
        return this.httpClient.put(`api/markdown/scratch`, scratch)
            .map((response: Response) => response.json() as Scratch);
    }
}
