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

    get(id: number): Observable<Book> {
        return this.http.get(`api/books/${id}`)
            .map((response: Response) => response.json() as Book);
    }

    save(book: Book): Observable<Book> {
        return this.http.post(`api/books`, book)
            .map((response: Response) => response.json() as Book);
    }

    update(book: Book): Observable<Book> {
        return this.http.put(`api/books/${book.id}`, book)
            .map((response: Response) => response.json() as Book);
    }

    remove(book: Book): Observable<any> {
        return this.http.delete(`api/books/${book.id}`);
    }
}
