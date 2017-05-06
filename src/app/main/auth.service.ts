import {Injectable} from "@angular/core";

import {UserRef} from "./user.model";

@Injectable()
export class AuthService {
    currentUser: UserRef;

    get loggedIn(): boolean {
        return !!this.currentUser
    }

    setLoggedIn(userRef: UserRef): void {
        this.currentUser = userRef
    }

    setLoggedOut(): void {
        this.currentUser = undefined;
    }
}
