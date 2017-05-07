import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

import {CommonModule} from "../common/common.module";
import {BooksComponent} from "./books/books.component";
import {BooksService} from "./books/books.service";
import {GamesComponent} from "./games/games.component";
import {GamesService} from "./games/games.service";
import {WishlistComponent} from "./wishlist.component";

const routes: Routes = [
    { path: 'wishlist', component: WishlistComponent }
];

@NgModule({
    declarations: [
        WishlistComponent,
        BooksComponent,
        GamesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(routes),
        CommonModule
    ],
    providers: [
        BooksService,
        GamesService
    ],
    exports: [
        RouterModule
    ]
})
export class WishlistModule { }
