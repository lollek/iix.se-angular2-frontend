import {Injectable} from "@angular/core";

import {UserRef} from "./user.model";

@Injectable()
export class AuthService {

    // noinspection JSMethodCanBeStatic
    get loggedIn(): boolean {
        return !!localStorage.getItem('jwt');
    }

    // noinspection JSMethodCanBeStatic
    setLoggedIn(userRef: UserRef): void {
        localStorage.setItem('jwt', (<any>userRef).headers.get('Authorization').substring('Bearer '.length));
    }

    // noinspection JSMethodCanBeStatic
    setLoggedOut(): void {
        localStorage.removeItem('jwt');
    }
}
