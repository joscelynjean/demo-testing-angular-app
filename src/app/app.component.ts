import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'List of hockey players!';
  players: Player[] = [];

  constructor(private playersService: PlayersService) { }

  public ngOnInit(): void {
    // Get players
    this.playersService.getList().subscribe(
      listOfPlayers => {
        this.players = listOfPlayers;
      }
    );
  }

}
