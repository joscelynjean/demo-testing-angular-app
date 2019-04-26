import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './pages/players/players.component';
import { PlayerDetailComponent } from './pages/player-detail/player-detail.component';
import { PrettierPlayerNamePipe } from './pipes/prettier-player-name.pipe';


@NgModule({
  imports: [
    CommonModule,
    PlayersRoutingModule
  ],
  declarations: [
    PlayersComponent,
    PlayerDetailComponent,
    PrettierPlayerNamePipe
  ]
})
export class PlayersModule { }
