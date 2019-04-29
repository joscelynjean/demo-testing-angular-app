import { PlayerDetailComponent } from './../../src/app/players/pages/player-detail/player-detail.component';
import { browser, by, element } from 'protractor';
import { PlayerDetailPage } from './player-detail.po';

export class PlayersPage {

  navigateTo() {
    return browser.get('/players');
  }

  getSectionText() {
    return element(by.css('app-root h2')).getText();
  }

  clickOnPlayer(index: number): PlayerDetailPage {
    const item = element.all(by.css('a')).get(index).click();
    return new PlayerDetailPage();
  }

}
