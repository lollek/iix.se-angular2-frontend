import {Component, OnInit} from "@angular/core";
import {AuthService} from "../main/auth.service";
import {BeersService} from "./beers.service";
import {FormControl} from "@angular/forms";
import {Beer} from "./beer.model";

@Component({
    selector: 'beers',
    template: `
<h1>Beer
    <button [hidden]="!isLoggedIn" class="btn btn-outline-success">
        <span class="fa fa-plus"></span>
        Add beer
    </button>
</h1>


<form>
    <div class="form-group">
        <div class="input-group">
            <div class="input-group-addon"><span class="fa fa-search"></span></div>
            <input type="text" class="form-control" placeholder="Filter" name="textFilter" [formControl]="filterText$">
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
            <th><a href="javascript:void(0)" (click)="sort('type')">Type</a></th>
            <th><a href="javascript:void(0)" (click)="sort('sscore')">S-Score</a></th>
            <th><a href="javascript:void(0)" (click)="sort('oscore')">O-Score</a></th>
        </tr>
    </thead>

    <tbody>
        <tr *ngFor="let beer of filteredBeers">
            <td>{{ beer.name }}</td>
            <td>{{ beer.brewery }}</td>
            <td>{{ beer.percentage | number: '1.1' }}</td>
            <td>{{ beer.country }}</td>
            <td>{{ beer.style }}</td>
            <td>{{ beer.sscore }}</td>
            <td >{{ beer.oscore }}</td>
        </tr>
    </tbody>
</table>`
})

export class BeersComponent implements OnInit {
    beers: Beer[];
    filteredBeers: Beer[];
    filterText$: FormControl;
    sortKey: string;
    sortReverse: boolean;

    constructor(
        private authService: AuthService,
        private beersService: BeersService
    ) {
    }

    ngOnInit(): void {
        this.filterText$ = new FormControl();
        this.sortKey = undefined;
        this.sortReverse = false;
        this.beersService.list().subscribe(
            next => {
                this.beers = next;
                this.sort('name');
                this.filterText$.valueChanges
                    .startWith(undefined)
                    .map((filterText: string): Beer[] =>
                        filterText
                            ? this.beers.filter((beer: Beer) =>
                                (beer.name && beer.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) ||
                                (beer.brewery && beer.brewery.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) ||
                                (beer.country && beer.country.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) ||
                                (beer.style && beer.style.toLowerCase().indexOf(filterText.toLowerCase()) !== -1))
                            : this.beers
                    ).subscribe(beers => this.filteredBeers = beers);
            }
        );
    }

    //noinspection JSUnusedGlobalSymbols
    get isLoggedIn(): boolean {
        return this.authService.loggedIn;
    }

    sort(key: string): void {
        if (this.sortKey === key) {
            this.sortReverse = !this.sortReverse;
        } else {
            this.sortKey = key;
            this.sortReverse = false;
        }
        this.beers = this.beers.sort((a: Beer, b: Beer) => {
            const aKey = a[key] ? a[key] : '';
            const bKey = b[key] ? b[key] : '';
            if (typeof aKey === 'string') {
                return aKey.localeCompare(bKey);
            } else {
                return aKey - bKey;
            }
        });
        if (this.sortReverse) {
            this.beers = this.beers.reverse();
        }
    }
}
