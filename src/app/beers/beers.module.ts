import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {CommonModule} from "../common/common.module";
import {BeersService} from "./beers.service";
import {BeersComponent} from "./beers.component";
import {BeerComponent} from "./beer.component";

const routes: Routes = [
    { path: 'beers', component: BeersComponent },
    { path: 'beers/new', component: BeerComponent },
    { path: 'beers/:id', component: BeerComponent },
];

@NgModule({
    declarations: [
        BeersComponent,
        BeerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        CommonModule
    ],
    providers: [
        BeersService
    ],
    exports: [
        RouterModule
    ]
})
export class BeersModule { }
