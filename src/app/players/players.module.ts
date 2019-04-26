import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './pages/players/players.component';
import { PlayerDetailComponent } from './pages/player-detail/player-detail.component';


@NgModule({
  imports: [
    CommonModule,
    PlayersRoutingModule
  ],
  declarations: [
    PlayersComponent,
    PlayerDetailComponent
  ]
})
export class PlayersModule { }
