import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {ScratchComponent} from "./scratch.component";
import {ScratchService} from "./scratch.service";
import {CommonModule} from "../common/common.module";

const routes: Routes = [
    { path: 'scratch', component: ScratchComponent }
];

@NgModule({
    declarations: [
        ScratchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(routes),
        CommonModule
    ],
    providers: [
        ScratchService
    ],
    exports: [
        RouterModule
    ]
})
export class ScratchModule { }
