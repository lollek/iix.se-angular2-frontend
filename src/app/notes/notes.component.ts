import {Component, OnInit} from '@angular/core';
import "rxjs/Rx";

import {AuthService} from "../main/auth.service";
import {NoteRef} from "./note.model";
import {NotesService} from "./notes.service";
import {FormControl} from "@angular/forms";
import {ModalService} from "../common/modal.service";

@Component({
    selector: 'notes',
    template: `
<h1>
    Notes
    <button [hidden]="!isLoggedIn" routerLink="/notes/new" class="btn btn-outline-success">
        <span class="fa fa-plus"></span>
        Add note
    </button>
</h1>
<form>
    <div class="form-group">
        <div class="input-group">
        <div class="input-group-addon"><span class="fa fa-search"></span></div>
            <input type="text"
                   class="form-control"
                   placeholder="Filter"
                   [formControl]="filterText$"
                   autocomplete="off"
                   name="filterText">
        </div>
    </div>
</form>
<loading-spinner [hidden]="!isLoadingData"></loading-spinner>
<div [hidden]="isLoadingData" class="list-group">
    <a *ngFor="let note of filteredNotes"
       routerLink="/notes/{{ note.id }}"
       class="list-group-item list-group-item-action justify-content-between">
        &raquo;
        {{ note.title }}
        <h6 class="m-0">
            <span class="badge badge-primary badge-pill" [innerText]="note.date"></span>
        </h6>
    </a>
</div>`
})

export class NotesComponent implements OnInit {
    filteredNotes: NoteRef[];
    isLoadingData: boolean;
    filterText$: FormControl;


    constructor(
        private authService: AuthService,
        private notesService: NotesService,
        private modalService: ModalService
    ) {
    }

    ngOnInit(): void {
        this.isLoadingData = true;
        this.filterText$ = new FormControl();
        this.notesService.list().subscribe(
            notes => {
                this.isLoadingData = false;
                notes = notes.sort((a: NoteRef, b: NoteRef) => b.date.localeCompare(a.date));
                this.filterText$.valueChanges
                    .startWith(undefined)
                    .map((filterText: string): NoteRef[] =>
                        filterText
                            ? notes.filter((note: NoteRef) => note.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
                            : notes
                    ).subscribe(notes => this.filteredNotes = notes);
            },
            error => this.error(error)
        );
    }

    get isLoggedIn(): boolean {
        return this.authService.loggedIn;
    }

    error(text: string): void {
        this.modalService.error(text);
    }
}
