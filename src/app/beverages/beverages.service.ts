import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {Beverage} from "./beverage.model";
import {HttpClient} from "../common/http-client.service";

@Injectable()
export class BeveragesService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    list(category: number): Observable<Beverage[]> {
        return this.httpClient.get('api/beverages', { 'category': category })
            .map((response: Response) => response.json() as Array<Beverage>);
    }

    get(id: number): Observable<Beverage> {
        return this.httpClient.get(`api/beverages/${id}`)
            .map((response: Response) => response.json() as Beverage);
    }

    save(beer: Beverage): Observable<Beverage> {
        return this.httpClient.post(`api/beverages`, beer)
            .map((response: Response) => response.json() as Beverage);
    }

    update(beer: Beverage): Observable<Beverage> {
        return this.httpClient.put(`api/beverages/${beer.id}`, beer)
            .map((response: Response) => response.json() as Beverage);
    }

    remove(beer: Beverage): Observable<any> {
        return this.httpClient.delete(`api/beverages/${beer.id}`);
    }
}
