import {Component, OnInit} from '@angular/core';

import {AuthService} from "../main/auth.service";
import {NoteRef} from "./note.model";
import {NotesService} from "./notes.service";

@Component({
    selector: 'notes',
    template: `
<h1>
    Notes
    <a [hidden]="!isLoggedIn" routerLink="notes/new" type="button" class="btn btn-primary">Add note</a>
</h1>
<loading-spinner [hidden]="!isLoadingData"></loading-spinner>
<div [hidden]="isLoadingData" class="list-group">
    <a *ngFor="let note of notes"
       routerLink="/notes/{{ note.id }}"
       class="list-group-item list-group-item-action justify-content-between">
        &raquo;
        {{ note.title }}
        <span class="badge badge-default" [innerText]="note.date"></span>
    </a>
</div>`
})

export class NotesComponent implements OnInit {
    notes: NoteRef[];
    isLoadingData: boolean;

    constructor(
        private authService: AuthService,
        private notesService: NotesService
    ) {
    }

    ngOnInit(): void {
        this.isLoadingData = false;
        this.notesService.list().subscribe(
            data => this.notes = data.reverse()
        );
    }

    private get isLoggedIn(): boolean {
        return this.authService.loggedIn;
    }

}
