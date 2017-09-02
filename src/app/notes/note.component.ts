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
        <button [hidden]="!isLoggedIn" (click)="remove()" class="btn btn-outline-danger">
            <span class="fa fa-trash"></span>
            Delete
        </button>
        <button [hidden]="!isLoggedIn" (click)="edit()" class="btn btn-outline-info">
            <span class="fa fa-pencil"></span>
            Edit
        </button>
        <hr>
        <markdown [data]="note.text"></markdown>
    </div>
    
    <loading-spinner [hidden]="!isLoadingData"></loading-spinner>

    <form>
        <div [hidden]="!isEditing">
            <div class="form-group">
                <label>Title</label>
                <input class="form-control"
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
            <button (click)="save()" class="btn btn-outline-success">
                <span class="fa fa-floppy-o"></span>
                Save
            </button>
            <button (click)="cancel()" class="btn btn-outline-warning">
                <span class="fa fa-times"></span>
                Cancel
            </button>
        </div>
    </form>
</div>`
})

export class NoteComponent implements OnInit {
    note: Note;
    noteBackup: Note;
    isEditing: boolean;
    isLoadingData: boolean;

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
        this.note.title = '';
        this.isEditing = false;
        this.isLoadingData = true;
        this.activatedRoute.params.subscribe((params: Params) => {
            if (params['id']) {
                this.notesService.get(+params['id']).subscribe(
                    data => {
                        this.isLoadingData = false;
                        this.note = data;
                        this.noteBackup = data;
                    },
                    err => this.error(err)
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
            error => this.error(error)
        );
    }

    //noinspection JSUnusedGlobalSymbols
    edit(): void {
        this.isEditing = true;
    }

    //noinspection JSUnusedGlobalSymbols
    save(): void {
        const saveFn = this.note.id
            ? this.notesService.update.bind(this.notesService)
            : this.notesService.save.bind(this.notesService);

       saveFn(this.note).subscribe(
            next => this.note = next,
            error => this.error(error),
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
