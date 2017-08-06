import {Component, OnInit} from "@angular/core";
import {Book} from "./book.model";
import {BooksService} from "./books.service";
import {ModalService} from "../../common/modal.service";

@Component({
    selector: 'books',
    template: `
<h1>Books</h1>
<loading-spinner [hidden]="!isLoadingData"></loading-spinner>

<div class="row">
    <div *ngFor="let book of books" class="col-xs-12 col-sm-6 col-md-4 col-lg-2 py-2">
        <div class="card">
            <img class="card-img-top img-fluid" [src]="book.image">
            <div class="card-block">
                <h5 class="card-title text-center" [innerText]="book.title"></h5>
            </div>
        </div>
    </div>
</div>

<small>Data from <a href="https://www.goodreads.com/review/list/37418936-olle?shelf=to-read">Goodreads</a></small>
`
})

export class BooksComponent implements OnInit {
    books: Book[];
    isLoadingData: boolean;

    constructor(
        private booksService: BooksService,
        private modalService: ModalService
    ) {
    }

    ngOnInit(): void {
        this.isLoadingData = true;
        this.booksService.list().subscribe(
            next => {
                this.isLoadingData = false;
                this.books = next;
            },
            error => this.modalService.error('Failed to get data from server')
        );
    }
}
