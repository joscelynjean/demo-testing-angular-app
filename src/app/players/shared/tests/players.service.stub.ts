import { of, Observable } from 'rxjs';
import { Player } from '../player';

export class PlayersServiceStub {

  public static readonly PLAYERS: Player[] = [{
    id: 1,
    name: 'Joel Armia\\armiajo01',
    flag: 'fi',
    position: 'RW',
    age: 25,
    heigth: '6-4',
    weight: 210,
    experience: '4',
    birthDate: 'May 31 1993',
    summary: '13 G 10 A 23 P',
    salary: '$1850000',
    draft: '2011 BUF 1st (16)'
  },
  {
    id: 99,
    name: 'Joel Armia\\armiajo01',
    flag: 'fi',
    position: 'RW',
    age: 25,
    heigth: '6-4',
    weight: 210,
    experience: '4',
    birthDate: 'May 31 1993',
    summary: '13 G 10 A 23 P',
    salary: '$1850000',
    draft: '2011 BUF 1st (16)'
  }
  ];

  getList(): Observable<Player[]> {
    return of(PlayersServiceStub.PLAYERS);
  }

  getPlayer(id: number): Observable<Player> {
    return of(PlayersServiceStub.PLAYERS.find((player, index, array) => player.id === id));
  }

}
