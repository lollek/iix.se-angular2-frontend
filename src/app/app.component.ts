import {Component, OnInit} from '@angular/core';
import {UserRef} from "./main/user.model";
import {AuthService} from "./main/auth.service";
import {HttpClient} from "./common/http-client.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    user: { username: string, password: string };
    errorMessage: string;

    constructor(
        private httpClient: HttpClient,
        private authService: AuthService
    ) {
    }

    //noinspection JSUnusedGlobalSymbols
    get loggedIn(): boolean {
        return this.authService.loggedIn;
    }

    ngOnInit(): void {
        this.errorMessage = undefined;
        this.user = {
            username: '',
            password: ''
        };
    }

    //noinspection JSUnusedGlobalSymbols
    login() {
        this.httpClient.post('/api/login', this.user).subscribe(
            res => this.loginSuccess(res),
            err => this.loginError(err)
        );
    }

    //noinspection JSUnusedGlobalSymbols
    logout() {
         this.authService.setLoggedOut();
    }

    loginSuccess(data: UserRef) {
        this.authService.setLoggedIn(data);
        this.errorMessage = undefined;
        this.user.password = '';
    }

    loginError(data: { status: number, statusText: string }) {
        this.authService.setLoggedOut();
        this.errorMessage = `${data.status} - ${data.statusText}`;
    }
}
