import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {AuthService} from "../main/auth.service";
import {BeveragesService} from "./beverages.service";
import {Beverage, BeverageCategory} from "./beverage.model";
import {ModalService} from "../common/modal.service";

@Component({
    selector: 'beverages',
    template: `
        <nav class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active"
                   [ngClass]="{ 'active': beverageCategory === beer }"
                   href="javascript:void(0)"
                   (click)="setBeverageCategory(beer)">Beer</a>
            </li>
            <li class="nav-item">
                <a class="nav-link"
                   [ngClass]="{ 'active': beverageCategory === sake }"
                   href="javascript:void(0)"
                   (click)="setBeverageCategory(sake)">Sake</a>
            </li>
            <li class="nav-item">
                <a class="nav-link"
                   [ngClass]="{ 'active': beverageCategory === whiskey }"
                   href="javascript:void(0)"
                   (click)="setBeverageCategory(whiskey)">Whiskey</a>
            </li>
            <li class="nav-item">
                <a class="nav-link"
                   [ngClass]="{ 'active': beverageCategory === wine }"
                   href="javascript:void(0)"
                   (click)="setBeverageCategory(wine)">Wine</a>
            </li>
        </nav>
        <div class="py-2">
            <button [hidden]="!isLoggedIn" class="btn btn-outline-success" routerLink="/beverages/new">
                <span class="fa fa-plus"></span>
                Add new
            </button>
        </div>
        <form>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-addon"><span class="fa fa-search"></span></div>
                    <input
                        class="form-control"
                        placeholder="Filter"
                        [formControl]="filterText$"
                        autocomplete="off"
                        name="textFilter">
                </div>
            </div>
        </form>

        <table class="table table-hover table-responsive">
            <thead>
            <tr class="header">
                <th><a href="javascript:void(0)" (click)="sort('name')">Name</a></th>
                <th><a href="javascript:void(0)" (click)="sort('brewery')">Brewery</a></th>
                <th><a href="javascript:void(0)" (click)="sort('percentage')">Percentage</a></th>
                <th><a href="javascript:void(0)" (click)="sort('country')">Country</a></th>
                <th><a href="javascript:void(0)" (click)="sort('style')">Type</a></th>
                <th><a href="javascript:void(0)" (click)="sort('sscore')">S-Score</a></th>
                <th><a href="javascript:void(0)" (click)="sort('oscore')">O-Score</a></th>
            </tr>
            </thead>

            <tbody>
            <tr *ngFor="let beverage of filteredBeverages" (click)="edit(beverage)">
                <td>{{ beverage.name }}</td>
                <td>{{ beverage.brewery }}</td>
                <td>{{ beverage.percentage | number: '1.1' }}</td>
                <td>{{ beverage.country }}</td>
                <td>{{ beverage.style }}</td>
                <td>{{ beverage.sscore }}</td>
                <td>{{ beverage.oscore }}</td>
            </tr>
            </tbody>
        </table>`
})

export class BeveragesComponent implements OnInit {

    beer = BeverageCategory.BEER;
    sake = BeverageCategory.SAKE;
    whiskey = BeverageCategory.WHISKEY;
    wine = BeverageCategory.WINE;

    beverages: Beverage[];
    filteredBeverages: Beverage[];
    filterText$: FormControl;
    sortKey: string;
    sortReverse: boolean;
    beverageCategory: number;

    constructor(
        private router: Router,
        private authService: AuthService,
        private beveragesService: BeveragesService,
        private modalService: ModalService
    ) {}

    ngOnInit(): void {
        this.filterText$ = new FormControl();
        this.sortKey = undefined;
        this.sortReverse = false;
        this.beverages = [];
        this.setBeverageCategory(BeverageCategory.BEER);
        this.sortKey = 'name';

        this.filterText$.valueChanges
            .startWith(undefined)
            .map((filterText: string): Beverage[] => {
                if (filterText) {
                    return this.beverages.filter((beverage: Beverage) =>
                        (beverage.name && beverage.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) ||
                        (beverage.brewery && beverage.brewery.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) ||
                        (beverage.country && beverage.country.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) ||
                        (beverage.style && beverage.style.toLowerCase().indexOf(filterText.toLowerCase()) !== -1));
                } else {
                    return this.beverages;
                }
            })
            .subscribe(beverages => this.filteredBeverages = beverages);
    }

    //noinspection JSUnusedGlobalSymbols
    get isLoggedIn(): boolean {
        return this.authService.loggedIn;
    }

    setBeverageCategory(category: BeverageCategory): void {
        this.beverageCategory = category;
        this.beveragesService.list(category).subscribe(
            next => {
                this.beverages = next;
                this.sort();
                this.filteredBeverages = this.beverages;
            },
            error => this.modalService.error(error)
        );
    }

    sort(key?: string): void {
        if (key) {
            if (this.sortKey === key) {
                this.sortReverse = !this.sortReverse;
            } else {
                this.sortKey = key;
                this.sortReverse = false;
            }
        }

        this.beverages = this.beverages.sort((a: Beverage, b: Beverage) => {
            const aKey = a[this.sortKey] ? a[this.sortKey] : '';
            const bKey = b[this.sortKey] ? b[this.sortKey] : '';
            if (typeof aKey === 'string') {
                return aKey.localeCompare(bKey);
            } else {
                return aKey - bKey;
            }
        });
        if (this.sortReverse) {
            this.beverages = this.beverages.reverse();
        }
    }

    //noinspection JSUnusedGlobalSymbols
    edit(beverage: Beverage): void {
        if (this.isLoggedIn) {
            this.router.navigate(['/beverages', beverage.id])
        }
    }
}
