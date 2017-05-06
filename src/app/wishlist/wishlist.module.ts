import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {CommonModule} from "../common/common.module";
import {BooksComponent} from "./books/books.component";
import {WishlistComponent} from "./wishlist.component";
import {GamesComponent} from "./games.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {BooksService} from "./books/books.service";

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
        BooksService
    ],
    exports: [
        RouterModule
    ]
})
export class WishlistModule { }
