import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {CommonModule} from "../common/common.module";
import {BeveragesService} from "./beverages.service";
import {BeveragesComponent} from "./beverages.component";
import {BeverageComponent} from "./bevereage.component";

const routes: Routes = [
    { path: 'beverages', component: BeveragesComponent },
    { path: 'beverages/new', component: BeverageComponent },
    { path: 'beverages/:id', component: BeverageComponent },
];

@NgModule({
    declarations: [
        BeveragesComponent,
        BeverageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        CommonModule
    ],
    providers: [
        BeveragesService,
    ],
    exports: [
        RouterModule
    ]
})
export class BeveragesModule { }
