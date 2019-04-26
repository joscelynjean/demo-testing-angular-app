import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  public getList(): Observable<Player[]> {
    return this.http.get<Player[]>('http://localhost:3000/players');
  }

  public getPlayer(id: Number): Observable<Player> {
    return this.http.get<Player>(`http://localhost:3000/players/${id}`);
  }
}
