import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {Beverage} from "./beverage.model";

@Injectable()
export class BeveragesService {

    constructor(
        private http: Http
    ) {
    }

    list(category: number): Observable<Beverage[]> {
        return this.http.get('api/beverages', { params: { 'category': category }})
            .map((response: Response) => response.json() as Array<Beverage>);
    }

    get(id: number): Observable<Beverage> {
        return this.http.get(`api/beverages/${id}`)
            .map((response: Response) => response.json() as Beverage);
    }

    save(beer: Beverage): Observable<Beverage> {
        return this.http.post(`api/beverages`, beer)
            .map((response: Response) => response.json() as Beverage);
    }

    update(beer: Beverage): Observable<Beverage> {
        return this.http.put(`api/beverages/${beer.id}`, beer)
            .map((response: Response) => response.json() as Beverage);
    }

    remove(beer: Beverage): Observable<any> {
        return this.http.delete(`api/beverages/${beer.id}`);
    }
}
