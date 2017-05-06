import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";

import {AuthService} from "../main/auth.service";
import {Note} from "./note.model";
import {NotesService} from "./notes.service";
import {ModalService} from "../common/modal.service";

@Component({
    selector: 'note',
    template: `
<div class="page-header">

    <div [hidden]="isEditing">
        <h1 [innerText]="note.title"></h1>
        <button [hidden]="!isLoggedIn" (click)="remove()" class="btn btn-danger">Delete</button>
        <button [hidden]="!isLoggedIn" (click)="edit()" class="btn btn-primary">Edit</button>
        <hr>
        <markdown [data]="note.text"></markdown>
    </div>

    <form>
        <div [hidden]="!isEditing">
            <div class="form-group">
                <label>Title</label>
                <input type="text"
                       class="form-control"
                       [(ngModel)]="note.title"
                       name="title">
            </div>
            <div class="form-group">
                <label>Date</label>
                <input type="date"
                       class="form-control"
                       [(ngModel)]="note.date"
                       name="date">
            </div>
            <div class="form-group">
                <label>Text</label>
                <textarea class="form-control"
                          [(ngModel)]="note.text"
                          rows="20"
                          name="text"></textarea>
            </div>
            <button (click)="save()" class="btn btn-primary">Save</button>
            <button (click)="cancel()" class="btn btn-warning">Cancel</button>
        </div>
    </form>
</div>`
})

export class NoteComponent implements OnInit {
    note: Note;
    noteBackup: Note;
    isEditing: boolean;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private notesService: NotesService,
        private modalService: ModalService
    ) {
    }

    //noinspection JSUnusedGlobalSymbols
    get isLoggedIn(): boolean {
        return this.authService.loggedIn;
    }

    ngOnInit(): void {
        this.note = new Note();
        this.isEditing = false;
        this.activatedRoute.params.subscribe((params: Params) => {
            if (params['id']) {
                this.notesService.get(+params['id']).subscribe(
                    data => {
                        this.note = data;
                        this.noteBackup = data;
                    },
                    err => this.error('Failed to load note')
                );
            } else {
                this.isEditing = true;
            }
        });
    }

    //noinspection JSUnusedGlobalSymbols
    remove(): void {
        this.notesService.remove(this.note).subscribe(
            next => this.router.navigate(['/notes']),
            error => this.error('Failed to delete note')
        );
    }

    //noinspection JSUnusedGlobalSymbols
    edit(): void {
        this.isEditing = true;
    }

    //noinspection JSUnusedGlobalSymbols
    save(): void {
        this.notesService.save(this.note).subscribe(
            next => this.note = next,
            error => this.error('Failed to save note'),
            () => {
                this.isEditing = false
            }
        );
    }

    //noinspection JSUnusedGlobalSymbols
    cancel(): void {
        this.isEditing = false;
        this.note = this.noteBackup;
    }

    error(text: string): void {
        this.modalService.error(text);
    }
}
