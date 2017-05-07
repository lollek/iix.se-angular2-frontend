import {Component, OnInit} from "@angular/core";

import {ModalService} from "../../common/modal.service";
import {Game} from "./game.model";
import {GamesService} from "./games.service";



@Component({
    selector: 'games',
    template: `
<h1>Games</h1>
<loading-spinner [hidden]="!isLoadingData"></loading-spinner>

<div class="row">
    <div *ngFor="let game of games" class="col-xs-12 col-sm-6 col-md-4 col-lg-2 py-2">
        <a [href]="game.link">
            <div class="card">
                <img class="card-img-top img-fluid" [src]="game.image">
                <div class="card-block">
                    <h4 class="card-title text-center" [innerText]="game.name"></h4>
                </div>
            </div>
        </a>
    </div>
</div>
`
})

export class GamesComponent implements OnInit {
    games: Game[];
    isLoadingData: boolean;

    constructor(
        private gamesService: GamesService,
        private modalService: ModalService
    ) {
    }

    ngOnInit(): void {
        this.isLoadingData = true;
        this.gamesService.list().subscribe(
            next => {
                this.isLoadingData = false;
                this.games = next
            },
            error => this.modalService.error('Failed to get data from server')
        );
    }
}
