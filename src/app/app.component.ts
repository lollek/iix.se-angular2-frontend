import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    user: { username: string, password: string};
    errorMessage: string;
    loggedIn: boolean;

    constructor(
        private http: Http
    ) {
    }

    ngOnInit(): void {
        this.loggedIn = false;
        this.errorMessage = undefined;
        this.user = {
            username: '',
            password: ''
        };
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
         this.loggedIn = false;
         this.http.delete('/api/login').subscribe();
    }

    //noinspection JSUnusedGlobalSymbols
    checkLoggedIn() {
         this.http.get('/api/login').subscribe(
             res => this.loginSuccess(res)
         );
    }

    loginSuccess(data: any) {
        console.log('loginSuccess', data)
        this.loggedIn = true;
        this.errorMessage = undefined;
        this.user.password = '';
    }

    loginError(data: string) {
        console.log('loginError', data)
        this.loggedIn = false;
        this.errorMessage = data;
    }
}
