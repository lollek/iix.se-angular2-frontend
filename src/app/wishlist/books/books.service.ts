import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Book} from "./book.model";
import {Observable} from "rxjs";
import {HttpClient} from "../../common/http-client.service";

@Injectable()
export class BooksService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    list(): Observable<Book[]> {
        return this.httpClient.get('api/books')
            .map((response: Response) => response.json() as Array<Book>);
    }
}
