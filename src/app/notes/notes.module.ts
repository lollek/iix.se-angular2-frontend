import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {NotesComponent} from "./notes.component";
import {NotesService} from "./notes.service";
import {CommonModule} from "../common/common.module";
import {NoteComponent} from "./note.component";

const routes: Routes = [
    { path: 'notes', component: NotesComponent },
    { path: 'notes/new', component: NoteComponent },
    { path: 'notes/:id', component: NoteComponent },
];

@NgModule({
    declarations: [
        NotesComponent,
        NoteComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
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
