import {Component, OnInit} from "@angular/core";
import {Book} from "./book.model";
import {BooksService} from "./books.service";
import {ModalService} from "../../common/modal.service";
import {AuthService} from "../../main/auth.service";

@Component({
    selector: 'books',
    template: `
<h1>Books
    <button [hidden]="!isEditing" (click)="toggleEdit()" class="btn btn-primary">Stop editing</button>
    <button [hidden]="isEditing || !isLoggedIn" (click)="toggleEdit()" class="btn btn-primary">Edit</button>
</h1>
<loading-spinner [hidden]="!isLoadingData"></loading-spinner>

<div [hidden]="isEditing">
    <div class="row">
        <div *ngFor="let book of books" class="col-xs-12 col-sm-6 col-md-4 col-lg-2 py-2">
            <div class="card">
                <img class="card-img-top img-fluid" [src]="book.image">
                <div class="card-block">
                    <h4 class="card-title text-center" [innerText]="book.title"></h4>
                    <p class="card-text text-center" [innerText]="book.other"></p>
                </div>
            </div>
        </div>
    </div>
</div>
    
<div [hidden]="!isEditing">
    <button (click)="add()" class="btn btn-primary">Add row</button>
    <table class="table table-hover table-responsive">
        <thead>
            <tr class="header">
                <th>Title</th>
                <th>Author</th>
                <th>Other</th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let book of books">
                <td><input type="text" [(ngModel)]="book.title" name="title"></td>
                <td><input type="text" [(ngModel)]="book.author" name="author"></td>
                <td><input type="text" [(ngModel)]="book.other" name="other"></td>
                <td><input type="text" [(ngModel)]="book.image" name="image"></td>
                <td><button (click)="save(book)" class="btn btn-success">Save</button></td>
                <td><button (click)="reload(book)" class="btn btn-warning">Reload</button></td>
                <td><button (click)="delete(book)" class="btn btn-danger">Delete</button></td>
            </tr>
        </tbody>
    </table>
</div>
`
})

export class BooksComponent implements OnInit {
    books: Book[];
    isEditing: boolean;
    isLoadingData: boolean;

    get isLoggedIn(): boolean {
        return this.authService.loggedIn;
    }

    constructor(
        private authService: AuthService,
        private booksService: BooksService,
        private modalService: ModalService
    ) {
    }

    ngOnInit(): void {
        this.isEditing = false;
        this.isLoadingData = true;
        this.booksService.list().subscribe(
            next => {
                this.isLoadingData = false;
                this.books = next
            },
            error => this.modalService.error('Failed to get data from server')
        );
    }

    toggleEdit(): void {
        this.isEditing = !this.isEditing;
    }

    add(): void { }
    save(book: Book): void {}
    reload(book: Book): void {}
    delete(book: Book): void {}
}
