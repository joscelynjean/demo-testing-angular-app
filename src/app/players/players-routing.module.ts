import { PlayerDetailComponent } from './pages/player-detail/player-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './pages/players/players.component';

const playersRoutes: Routes = [
  { path: 'players', component: PlayersComponent },
  { path: 'player-detail/:id', component: PlayerDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(playersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlayersRoutingModule { }
