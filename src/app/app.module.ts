import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './main/page-not-found.component';
import {FrontPageComponent} from "./main/front-page.component";
import {NotesModule} from "./notes/notes.module";
import {AuthService} from "./main/auth.service";
import {ModalService} from "./common/modal.service";
import {WishlistModule} from "./wishlist/wishlist.module";
import {BeersModule} from "./beers/beers.module";
import {MoriaModule} from "./moria/moria.module";

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: FrontPageComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        FrontPageComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes, { useHash: true }),
        NotesModule,
        WishlistModule,
        BeersModule,
        MoriaModule
    ],
    providers: [
        AuthService,
        ModalService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
