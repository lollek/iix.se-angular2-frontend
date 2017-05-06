import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {UserRef} from "./main/user.model";
import {AuthService} from "./main/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    user: { username: string, password: string };
    errorMessage: string;

    constructor(
        private http: Http,
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
        this.checkLoggedIn();
    }

    //noinspection JSUnusedGlobalSymbols
    login() {
        this.http.post('/api/login', this.user).subscribe(
            res => this.loginSuccess(res),
            err => this.loginError(err)
        );
    }

    //noinspection JSUnusedGlobalSymbols
    logout() {
         this.http.delete('/api/login').subscribe();
         this.authService.setLoggedOut();
    }

    //noinspection JSUnusedGlobalSymbols
    checkLoggedIn() {
         this.http.get('/api/login').subscribe(
             res => this.loginSuccess(res)
         );
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
