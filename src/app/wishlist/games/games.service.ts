import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

import {Game} from "./game.model";

@Injectable()
export class GamesService {

    constructor(
        private http: Http
    ) {
    }

    list(): Observable<Game[]> {
        return this.http.get('api/games')
            .map((response: Response) => response.json() as Array<Game>);
    }

    get(id: number): Observable<Game> {
        return this.http.get(`api/games/${id}`)
            .map((response: Response) => response.json() as Game);
    }

    save(game: Game): Observable<Game> {
        return this.http.post(`api/games`, game)
            .map((response: Response) => response.json() as Game);
    }

    update(game: Game): Observable<Game> {
        return this.http.put(`api/games/${game.id}`, game)
            .map((response: Response) => response.json() as Game);
    }

    remove(game: Game): Observable<any> {
        return this.http.delete(`api/games/${game.id}`);
    }
}
