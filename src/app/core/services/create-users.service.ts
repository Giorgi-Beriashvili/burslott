import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IPlayer } from '../interfaces/player';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CreateUsersService implements OnInit {
    firebaseBurslotUrl: string;
    players: IPlayer[] = [];
    score!: string;

    constructor(private http: HttpClient) {
        this.firebaseBurslotUrl = environment.firebaseBurslotUrl;
    }

    setPlayers(players: IPlayer[]): Observable<IPlayer[]> {
        return this.http.post<IPlayer[]>(this.firebaseBurslotUrl, players);
    }

    getPlayers(): Observable<IPlayer[]> {
        return this.http.get<IPlayer[]>(this.firebaseBurslotUrl);
    }

    createdPlayers(players: IPlayer[]) {
        return (this.players = players);
    }

    ngOnInit() {

    }
}
