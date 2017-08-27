import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {Beer} from "./beer.model";

@Injectable()
export class BeersService {

    constructor(
        private http: Http
    ) {
    }

    list(): Observable<Beer[]> {
        return this.http.get('api/beer')
            .map((response: Response) => response.json() as Array<Beer>);
    }

    get(id: number): Observable<Beer> {
        return this.http.get(`api/beer/${id}`)
            .map((response: Response) => response.json() as Beer);
    }

    save(beer: Beer): Observable<Beer> {
        return this.http.post(`api/beer`, beer)
            .map((response: Response) => response.json() as Beer);
    }

    update(beer: Beer): Observable<Beer> {
        return this.http.put(`api/beer/${beer.id}`, beer)
            .map((response: Response) => response.json() as Beer);
    }

    remove(beer: Beer): Observable<any> {
        return this.http.delete(`api/beer/${beer.id}`);
    }
}
