import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {NotesComponent} from "./notes.component";
import {BrowserModule} from "@angular/platform-browser";
import {NotesService} from "./notes.service";

const routes: Routes = [
    { path: 'notes', component: NotesComponent }
];

@NgModule({
    declarations: [
        NotesComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        NotesService
    ],
    exports: [
        RouterModule
    ]
})
export class NotesModule { }
