import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Book} from "./book.model";
import {Observable} from "rxjs";

@Injectable()
export class BooksService {

    constructor(
        private http: Http
    ) {
    }

    list(): Observable<Book[]> {
        return this.http.get('api/books')
            .map((response: Response) => response.json() as Array<Book>);
    }
}
