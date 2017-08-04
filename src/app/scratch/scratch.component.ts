import {Component, OnInit} from "@angular/core";
import {Scratch} from "./scratch.model";
import {ScratchService} from "./scratch.service";
import {AuthService} from "../main/auth.service";
import {ModalService} from "../common/modal.service";

@Component({
    selector: 'scratch',
    template: `
<div class="page-header">

    <div [hidden]="isEditing">
        <h1 [innerText]="scratch.name"></h1>
        <button [hidden]="!isLoggedIn" (click)="edit()" class="btn btn-outline-info">
            <span class="fa fa-pencil"></span>
            Edit
        </button>
        <hr>
        <markdown [data]="scratch.data"></markdown>
    </div>

    <form>
        <div [hidden]="!isEditing">
            <div class="form-group">
                <label>Scratch</label>
                <textarea class="form-control"
                          [(ngModel)]="scratch.data"
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

export class ScratchComponent implements OnInit {
    scratch: Scratch;
    scratchBackup: Scratch;
    isEditing: boolean;

    constructor(
        private authService: AuthService,
        private scratchService: ScratchService,
        private modalService: ModalService
    ) {
    }

    //noinspection JSUnusedGlobalSymbols
    get isLoggedIn(): boolean {
        return this.authService.loggedIn;
    }

    ngOnInit(): void {
        this.scratch = this.scratchBackup = new Scratch();
        this.isEditing = false;
        this.scratchService.get().subscribe(
            data => {
                this.scratch = data;
                this.scratchBackup = data;
            },
            err => this.error('Failed to load note')
        );
    }

    //noinspection JSUnusedGlobalSymbols
    edit(): void {
        this.isEditing = true;
    }

    //noinspection JSUnusedGlobalSymbols
    save(): void {
        this.scratchService.update(this.scratch).subscribe(
            next => {
                this.scratch = next;
                this.scratchBackup = next;
            },
            error => this.error('Failed to save note'),
            () => {
                this.isEditing = false;
                if (this.scratch.data == '') {
                    this.scratch.data = ' ';
                    this.scratch.data = '';
                }
            }
        );
    }

    //noinspection JSUnusedGlobalSymbols
    cancel(): void {
        this.isEditing = false;
        this.scratch = this.scratchBackup;
    }

    error(text: string): void {
        this.modalService.error(text);
    }
}
