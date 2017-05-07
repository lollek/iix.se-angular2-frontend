import {Component} from '@angular/core';

@Component({
    selector: 'front-page',
    template: `
<div class="row">
    <div *ngFor="let category of categories" class="col-xs-12 col-sm-6 col-lg-4 py-2">
        <div class="card">
            <a [routerLink]="category.link">
                <img class="card-img-top img-fluid" [src]="category.img">
                <div class="card-block">
                    <h4 class="card-title" [innerText]="category.text"></h4>
                </div>
            </a>
        </div>
    </div>
</div>
    `
})

export class FrontPageComponent {
    categories = [{
        text: 'Notes',
        link: '/notes',
        img: '/assets/notes.png'
    }, {
        text: 'Beers',
        link: '/beers',
        img: '/assets/beers.png'
    }, {
        text: 'Wishlist',
        link: '/wishlist',
        img: '/assets/wishlist.png'
    }, {
        text: 'Moria',
        link: '/moria',
        img: '/assets/moria.png'
    }];
}
