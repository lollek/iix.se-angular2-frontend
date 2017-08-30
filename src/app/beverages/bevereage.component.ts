import {Component, OnInit} from "@angular/core";
import {Beverage, BeverageCategory} from "./beverage.model";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {AuthService} from "../main/auth.service";
import {ModalService} from "../common/modal.service";
import {BeveragesService} from "./beverages.service";

@Component({
    selector: 'beverage',
    template: `
        <form>
            <div class="form-group row">
                <label class="col-md-3 col-sm-2 col-form-label">Category</label>
                <div class="col-md-9 col-sm-10">
                    <select class="form-control"
                            [(ngModel)]="beverage.category"
                            name="company">
                        <option [value]="beer">Beer</option>
                        <option [value]="sake">Sake</option>
                        <option [value]="whiskey">Whiskey</option>
                        <option [value]="wine">Wine</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-md-3 col-sm-2 col-form-label">Name</label>
                <div class="col-md-9 col-sm-10">
                    <input class="form-control"
                           [(ngModel)]="beverage.name"
                           name="name">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-md-3 col-sm-2 col-form-label">Brewery</label>
                <div class="col-md-3 col-sm-10">
                    <input class="form-control"
                           [(ngModel)]="beverage.brewery"
                           name="brewery">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-md-3 col-sm-2 col-form-label">Percentage</label>
                <div class="col-md-3 col-sm-10">
                    <input type="number"
                           class="form-control"
                           [(ngModel)]="beverage.percentage"
                           name="percentage"
                           step="0.1">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-md-3 col-sm-2 col-form-label">Country</label>
                <div class="col-md-9 col-sm-10">
                    <input class="form-control"
                           [(ngModel)]="beverage.country"
                           name="country">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-md-3 col-sm-2 col-form-label">Style</label>
                <div class="col-md-9 col-sm-10">
                    <input class="form-control"
                        [(ngModel)]="beverage.style"
                        name="style">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-md-3 col-sm-2 col-form-label">S-Score</label>
                <div class="col-md-9 col-sm-10">
                    <input type="number"
                           min="0"
                           max="5"
                           class="form-control"
                           [(ngModel)]="beverage.sscore"
                           name="sscore">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-md-3 col-sm-2 col-form-label">O-Score</label>
                <div class="col-md-9 col-sm-10">
                    <input type="number"
                           min="0"
                           max="5"
                           class="form-control"
                           [(ngModel)]="beverage.oscore"
                           name="oscore">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-md-3 col-sm-2 col-form-label">Comment</label>
                <div class="col-md-9 col-sm-10">
                    <textarea class="form-control"
                              [(ngModel)]="beverage.comment"
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

export class BeverageComponent implements OnInit {

    beer = BeverageCategory.BEER;
    sake = BeverageCategory.SAKE;
    whiskey = BeverageCategory.WHISKEY;
    wine = BeverageCategory.WINE;

    beverage: Beverage;
    beverageBackup: Beverage;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private beveragesService: BeveragesService,
        private modalService: ModalService
    ) {
    }

    //noinspection JSUnusedGlobalSymbols
    get isLoggedIn(): boolean {
        return this.authService.loggedIn;
    }

    ngOnInit(): void {
        this.beverage = new Beverage();
        this.beverageBackup = this.beverage;
        this.activatedRoute.params.subscribe(
            (params: Params) => {
                if (params['id']) {
                    this.beveragesService.get(+params['id']).subscribe(
                        data => {
                            this.beverage = data;
                            this.beverageBackup = data;
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
        this.beveragesService.remove(this.beverage).subscribe(
            next => this.goBack(),
            error => this.error(error)
        );
    }

    //noinspection JSUnusedGlobalSymbols
    save(): void {
        const saveFn = this.beverage.id
            ? this.beveragesService.update.bind(this.beveragesService)
            : this.beveragesService.save.bind(this.beveragesService);

        saveFn(this.beverage).subscribe(
            next => {
                this.beverage = next;
                this.goBack();
            },
            error => this.error(error)
        );
    }

    //noinspection JSUnusedGlobalSymbols
    cancel(): void {
        this.beverage = this.beverageBackup;
        this.goBack();
    }

    goBack(): void {
        this.router.navigate(['/beverages']);
    }

    error(text: string): void {
        this.modalService.error(text);
    }
}

