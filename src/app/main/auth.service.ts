import {Injectable} from "@angular/core";

import {UserRef} from "./user.model";
import {HttpClient} from "../common/http-client.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {

    constructor(
        private httpClient: HttpClient
    ) {}

    // noinspection JSMethodCanBeStatic
    get loggedIn(): boolean {
        return !!localStorage.getItem('jwt');
    }

    login(user: UserRef): Observable<UserRef> {
        return this.httpClient.post('/api/login', user)
            .do(user => this.setLoggedIn(user));
    }

    logout(): void {
        this.setLoggedOut();
    }

    // noinspection JSMethodCanBeStatic
    private setLoggedIn(userRef: UserRef): void {
        localStorage.setItem('jwt', (<any>userRef).headers.get('Authorization').substring('Bearer '.length));
    }

    // noinspection JSMethodCanBeStatic
    private setLoggedOut(): void {
        localStorage.removeItem('jwt');
    }
}
