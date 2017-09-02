import {Component, OnInit} from '@angular/core';
import {AuthService} from "./main/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    user: { username: string, password: string };
    errorMessage: string;

    constructor(
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
        this.authService.login(this.user).subscribe(
            next => this.loginSuccess(),
            err => this.loginError(err)
        )
    }

    //noinspection JSUnusedGlobalSymbols
    logout() {
         this.authService.logout();
    }

    loginSuccess() {
        this.errorMessage = undefined;
        this.user.password = '';
    }

    loginError(data: { status: number, statusText: string }) {
        this.authService.logout();
        this.errorMessage = `${data.status} - ${data.statusText}`;
    }
}
