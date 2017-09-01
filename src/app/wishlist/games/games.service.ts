import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs";

import {Game} from "./game.model";
import {HttpClient} from "../../common/http-client.service";

@Injectable()
export class GamesService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    list(): Observable<Game[]> {
        return this.httpClient.get('api/games')
            .map((response: Response) => response.json() as Array<Game>);
    }

    get(id: number): Observable<Game> {
        return this.httpClient.get(`api/games/${id}`)
            .map((response: Response) => response.json() as Game);
    }

    save(game: Game): Observable<Game> {
        return this.httpClient.post(`api/games`, game)
            .map((response: Response) => response.json() as Game);
    }

    update(game: Game): Observable<Game> {
        return this.httpClient.put(`api/games/${game.id}`, game)
            .map((response: Response) => response.json() as Game);
    }

    remove(game: Game): Observable<any> {
        return this.httpClient.delete(`api/games/${game.id}`);
    }
}
