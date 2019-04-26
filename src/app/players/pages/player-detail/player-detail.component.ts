import { PlayersService } from './../../shared/players.service';
import { Component, OnInit } from '@angular/core';
import { Player } from '../../shared/player';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  player: Player;

  constructor(private route: ActivatedRoute, private playersService: PlayersService, private location: Location) { }

  public ngOnInit(): void {
    this.getPlayer();
  }

  public getPlayer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.playersService.getPlayer(id).subscribe(player => this.player = player);
  }

  public goBack(): void {
    this.location.back();
  }

}
