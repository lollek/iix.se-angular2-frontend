import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {NotesComponent} from "./notes.component";
import {BrowserModule} from "@angular/platform-browser";
import {NotesService} from "./notes.service";
import {CommonModule} from "../common/common.module";

const routes: Routes = [
    { path: 'notes', component: NotesComponent }
];

@NgModule({
    declarations: [
        NotesComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(routes),
        CommonModule
    ],
    providers: [
        NotesService
    ],
    exports: [
        RouterModule
    ]
})
export class NotesModule { }
