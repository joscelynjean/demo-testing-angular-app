import { Component, OnInit } from '@angular/core';
import { Player } from '../../shared/player';
import { PlayersService } from '../../shared/players.service';

@Component({
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  title = 'List of hockey players!';
  players: Player[] = [];

  constructor(private playersService: PlayersService) { }

  public ngOnInit(): void {
    // Get players
    this.playersService.getList().subscribe(players => this.players = players);
  }

}
