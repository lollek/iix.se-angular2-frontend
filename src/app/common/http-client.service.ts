import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpClient {

    constructor(
        private http: Http
    ) {
    }

    get(url: string, params?: any): Observable<Response> {
        return this.http.get(url, {
            withCredentials: true,
            headers: HttpClient.headers(false),
            params: params
        });
    }

    put(url: string, data: any): Observable<Response> {
        return this.http.put(url, data, {
            withCredentials: true,
            headers: HttpClient.headers(true)
        });
    }

    post(url: string, data: any): Observable<Response> {
        return this.http.post(url, data, {
            withCredentials: true,
            headers: HttpClient.headers(true)
        });
    }

    delete(url: string): Observable<Response> {
        return this.http.delete(url, {
            withCredentials: true,
            headers: HttpClient.headers(true)
        });
    }

    private static headers(hasContent: boolean): Headers {
        const headers: Headers = new Headers();
        if (hasContent) {
            headers.append('Content-Type', 'application/json');
        }

        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            headers.append('Authorization', `Bearer ${jwt}`);
        }

        return headers;
    }
}
