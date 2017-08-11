import {Component, OnInit} from "@angular/core";
import {Beer} from "./beer.model";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {AuthService} from "../main/auth.service";
import {ModalService} from "../common/modal.service";
import {BeersService} from "./beers.service";

@Component({
    selector: 'beer',
    template: `
        <form>
            <div class="form-group row">
                <label class="col-2 col-form-label">Name</label>
                <div class="col-10">
                    <input class="form-control"
                           [(ngModel)]="beer.name"
                           name="name">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-2 col-form-label">Brewery</label>
                <div class="col-10">
                    <input class="form-control"
                           [(ngModel)]="beer.brewery"
                           name="brewery">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-2 col-form-label">Percentage</label>
                <div class="col-10">
                    <input type="number"
                           class="form-control"
                           [(ngModel)]="beer.percentage"
                           name="percentage"
                           step="0.1">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-2 col-form-label">Country</label>
                <div class="col-10">
                    <input class="form-control"
                           [(ngModel)]="beer.country"
                           name="country">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-2 col-form-label">Style</label>
                <div class="col-10">
                    <input class="form-control"
                        [(ngModel)]="beer.style"
                        name="style">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-2 col-form-label">S-Score</label>
                <div class="col-10">
                    <input type="number"
                           min="0"
                           max="5"
                           class="form-control"
                           [(ngModel)]="beer.sscore"
                           name="sscore">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-2 col-form-label">O-Score</label>
                <div class="col-10">
                    <input type="number"
                           min="0"
                           max="5"
                           class="form-control"
                           [(ngModel)]="beer.oscore"
                           name="oscore">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-2 col-form-label">Comment</label>
                <div class="col-10">
                    <textarea class="form-control"
                              [(ngModel)]="beer.comment"
                              rows="3"
                              name="text"></textarea>
                </div>
            </div>
            <button (click)="remove()" class="btn btn-outline-danger">
                <span class="fa fa-trash"></span>
                Delete
            </button>
            <button (click)="cancel()" class="btn btn-outline-warning">
                <span class="fa fa-times"></span>
                Cancel
            </button>
            <button (click)="save()" class="btn btn-outline-success">
                <span class="fa fa-floppy-o"></span>
                Save
            </button>
        </form>`
})

export class BeerComponent implements OnInit {
    beer: Beer;
    beerBackup: Beer;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private beersService: BeersService,
        private modalService: ModalService
    ) {
    }

    //noinspection JSUnusedGlobalSymbols
    get isLoggedIn(): boolean {
        return this.authService.loggedIn;
    }

    ngOnInit(): void {
        this.beer = new Beer();
        this.beerBackup = this.beer;
        this.activatedRoute.params.subscribe(
            (params: Params) => {
                if (params['id']) {
                    this.beersService.get(+params['id']).subscribe(
                        data => {
                            this.beer = data;
                            this.beerBackup = data;
                        },
                        error => this.error(error)
                    );
                }
            },
            error => this.error(error)
        );
    }

    //noinspection JSUnusedGlobalSymbols
    remove(): void {
        this.beersService.remove(this.beer).subscribe(
            next => this.goBack(),
            error => this.error('Failed to delete beer')
        );
    }

    //noinspection JSUnusedGlobalSymbols
    save(): void {
        const saveFn = this.beer.id
            ? this.beersService.update.bind(this.beersService)
            : this.beersService.save.bind(this.beersService);

        saveFn(this.beer).subscribe(
            next => {
                this.beer = next;
                this.goBack();
            },
            error => this.error('Failed to save beer')
        );
    }

    //noinspection JSUnusedGlobalSymbols
    cancel(): void {
        this.beer = this.beerBackup;
        this.goBack();
    }

    goBack(): void {
        this.router.navigate(['/beers']);
    }

    error(text: string): void {
        this.modalService.error(text);
    }
}

